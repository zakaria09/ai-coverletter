import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client"
import { Adapter } from 'next-auth/adapters';

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt'
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // callbacks: {
  //   session: async ({ session, token }: any) => {
  //     if (session?.user) {
  //       session.user.id = token.sub;
  //     }
  //     return session;
  //   }
  // }
  debug: true
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };