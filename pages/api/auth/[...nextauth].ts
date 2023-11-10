import { NextApiRequest, NextApiResponse } from 'next/types';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

import prisma from '../../../config/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import async from '../login';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        if (profile?.email?.endsWith("@udea.edu.co")) {
          if (!user?.emailVerified) {
            return '/verifyEmail'
          }
          return true
        }
        return false
      } else {
        console.log("Pagina de error")
      }
    },
  },
  pages: {
    error: '/signInError'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),

  ],
};

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
  await NextAuth(req, res, authOptions);

export default auth;