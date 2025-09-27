// src/lib/authOptions.ts
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      // Correct: Use the VARIABLE NAME
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!, 
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Remember to replace this with your actual GitHub email to become an admin
      if (session?.user && session.user.email === 'xinghdeepak209@gmail.com') {
        (session.user as any).role = 'admin';
      }
      return session;
    },
  },
};