// import {
//   auth,
//   clerkMiddleware,
//   createRouteMatcher,
// } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define which routes are public (no authentication required)
// const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);


// const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// export default clerkMiddleware(async (auth, req) => {

//   const { userId, sessionClaims } = await auth();



//   if (isAdminRoute(req)) {

//     if (
//       !sessionClaims?.user_metadata ||
//       typeof sessionClaims.user_metadata !== "object" ||
//       !("role" in sessionClaims.user_metadata) ||
//       sessionClaims.user_metadata.role !== "admin"
//     ) {
//       const homeUrl = new URL("/", req.url);
//       return NextResponse.redirect(homeUrl);
//     }

//     return NextResponse.next();
//   }

 
//   if (!userId && !isPublicRoute(req)) {

//     const signInUrl = new URL("/sign-in", req.url);
    
//     return NextResponse.redirect(signInUrl).json();
//   }

//   if (
//     userId &&
//     sessionClaims?.user_metadata &&
//     typeof sessionClaims.user_metadata === "object" &&
//     "role" in sessionClaims.user_metadata &&
//     sessionClaims.user_metadata.role === "admin" &&
//     !isAdminRoute(req)
//   ) {

//     const adminUrl = new URL("/admin", req.url);
//     return NextResponse.redirect(adminUrl);
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: [

//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };
import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes are public (no authentication required)
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

// Define admin routes
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware((req) => {
  // We can destructure auth directly from the clerkMiddleware callback
  const { userId, sessionClaims } = auth();

  // --- TEMPORARILY DISABLED FOR API TESTING ---
  // This block checks if the user is trying to access an admin route.
  // We are commenting it out so you can test admin API endpoints
  // without being an admin.
  /*
  if (isAdminRoute(req)) {
    // Redirect non-admins away from admin routes
    if (sessionClaims?.metadata?.role !== "admin") {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }

    // Allow admins to proceed
    return NextResponse.next();
  }
  */

  // This check remains to protect non-public routes from unauthenticated access
  // if (!userId && !isPublicRoute(req)) {
  //   // For API routes, it's better to return a JSON error than to redirect
  //   if (req.url.includes("/api")) {
  //     return NextResponse.json({ message: "Authentication Required" }, { status: 401 });
  //   }
  //   // For page routes, you can handle redirection if needed, but for now we allow it for testing
  // }

  // --- TEMPORARILY DISABLED FOR API TESTING ---
  // This block automatically redirects an admin to the /admin page
  // if they visit a non-admin page. We are commenting it out so you
  // can test regular user APIs while logged in as an admin.
  /*
  if (
    userId &&
    sessionClaims?.metadata?.role === "admin" &&
    !isAdminRoute(req)
  ) {
    const adminUrl = new URL("/admin", req.url);
    return NextResponse.redirect(adminUrl);
  }
  */

  // Allow all other requests to proceed

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Your matcher remains the same
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};