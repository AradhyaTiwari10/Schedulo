import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    console.log("No user found.");
    return null;
  }

  try {
    // Check if the user already exists in the database
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      console.log("User already exists in the database:", loggedInUser);
      return loggedInUser;
    }

    // Generate a unique username
    const name = `${user.firstName} ${user.lastName}`;
    const generatedUsername = name.split(" ").join("-") + user.id.slice(-4);

    // Ensure clerkClient is properly initialized
    const { users } = clerkClient;

    // Update user username in Clerk (if needed)
    if (users) {
      await users.updateUser(user.id, {
        username: generatedUsername,
      });
    } else {
      console.error("Clerk client not properly initialized.");
    }

    // Create a new user in the database
    const newUser = await db?.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl || "", // Optional: Handle case where imageUrl might be undefined
        email: user.emailAddresses[0]?.emailAddress || "", // Optional: Handle email address safely
        username: generatedUsername,
      },
    });

    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error);
  }
};
