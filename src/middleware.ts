import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes are public (no authentication required)
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);


const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {

  const { userId, sessionClaims } = await auth();


console.log("session data is",sessionClaims);
  if (isAdminRoute(req)) {

    if (
      !sessionClaims?.user_metadata ||
      typeof sessionClaims.user_metadata !== "object" ||
      !("role" in sessionClaims.user_metadata) ||
      sessionClaims.user_metadata.role !== "admin"
    ) {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
  }

 
  if (!userId && !isPublicRoute(req)) {

    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  if (
    userId &&
    sessionClaims?.user_metadata &&
    typeof sessionClaims.user_metadata === "object" &&
    "role" in sessionClaims.user_metadata &&
    sessionClaims.user_metadata.role === "admin" &&
    !isAdminRoute(req)
  ) {
    // ...redirect them to their main admin dashboard.
    const adminUrl = new URL("/admin", req.url);
    return NextResponse.redirect(adminUrl);
  }

  // If none of the above conditions are met, allow the request to proceed.
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Your existing matcher configuration
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
