import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account && account.access_token) {
                token.accessToken = account.access_token;
                (await cookies()).set("token", account.access_token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    path: "/",
                });
            }
            return token;
        },
        async session({ session, token }) {
            (session as any).accessToken = token.accessToken;
            return session;
        },
    },
    events: {
        async signIn({ account }) {
            console.log("User signed in!");
        },
    },
});

export { handler as GET, handler as POST };
