"use server";

import { db } from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

export async function createBooking(bookingData) {
  try {
    // Fetch the event and its creator
    const event = await db.event.findUnique({
      where: { id: bookingData.eventId },
      include: { user: true },
    });

    if (!event) {
      throw new Error("Event not found");
    }

    // Get the event creator's Google OAuth token from Clerk
    const { data } = await clerkClient.users.getUserOauthAccessToken(
      event.user.clerkUserId,
      "oauth_google"
    );

    const accessToken = data[0]?.token;
    const refreshToken = data[0]?.refreshToken; // Optional

    if (!accessToken) {
      throw new Error("Event creator has not connected Google Calendar");
    }

    // Set up Google OAuth client
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken, // If available
    });

    // Optionally refresh access token
    // try {
    //   const { token: validToken } = await oauth2Client.getAccessToken();
    //   oauth2Client.setCredentials({ access_token: validToken });
    // } catch (e) {
    //   throw new Error("Could not refresh Google access token. Please reconnect.");
    // }

    const calendar = google.calendar({ version: "v3", auth: oauth2Client });

    // Create Google Meet event and send email invites
    const meetResponse = await calendar.events.insert({
      calendarId: "primary",
      conferenceDataVersion: 1,
      sendUpdates: "all", // 💡 This sends email invites to attendees
      requestBody: {
        summary: `${bookingData.name} - ${event.title}`,
        description: bookingData.additionalInfo,
        start: {
          dateTime: bookingData.startTime,
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: bookingData.endTime,
          timeZone: "Asia/Kolkata",
        },
        attendees: [
          { email: bookingData.email },
          { email: event.user.email },
        ],
        conferenceData: {
          createRequest: {
            requestId: `${event.id}-${Date.now()}`,
          },
        },
      },
    });

    const meetLink = meetResponse.data.hangoutLink;
    const googleEventId = meetResponse.data.id;

    // Store booking in DB
    const booking = await db.booking.create({
      data: {
        eventId: event.id,
        userId: event.userId,
        name: bookingData.name,
        email: bookingData.email,
        startTime: bookingData.startTime,
        endTime: bookingData.endTime,
        additionalInfo: bookingData.additionalInfo,
        meetLink,
        googleEventId,
      },
    });

    return { success: true, booking, meetLink };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, error: error.message };
  }
}
