import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/(main)/dashboard(.*)",
  "/(main)/events(.*)",
  "/(main)/meetings(.*)",
  "/(main)/availability(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, sessionId } = auth();

  console.log("🔐 Clerk Middleware Log:");
  console.log("User ID:", userId);
  console.log("Session ID:", sessionId);
  console.log("Path:", req.nextUrl.pathname);

  if (!userId && isProtectedRoute(req)) {
    const signInUrl = new URL("/(auth)/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
