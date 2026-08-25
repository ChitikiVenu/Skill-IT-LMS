import type { NextAuthConfig } from "next-auth";

const protectedPaths = ["/dashboard", "/courses", "/course", "/lesson", "/labs", "/quizzes", "/assignments", "/projects", "/certificates", "/skills", "/ai", "/career", "/profile", "/settings", "/achievements", "/admin", "/instructor"];

export const authConfig = {
  pages: { signIn: "/signin" },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;
      const isProtected = protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
      return isProtected ? Boolean(auth) : true;
    },
  },
} satisfies NextAuthConfig;
