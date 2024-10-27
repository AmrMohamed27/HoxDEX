import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin", // Redirects to login if not authenticated
  },
});

export const config = {
  matcher: ["/wallets/:path*"],
};
