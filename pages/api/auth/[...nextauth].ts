import { NextApiRequest, NextApiResponse } from 'next/types';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

import prisma from '../../../config/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

const regex: RegExp = /^[a-zA-Z0-9._%+-]+@udea\.edu\.co$/;
export const authOptions: NextAuthOptions = {
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Validar correo @udea.edu.co aquí  
      if (!regex.test(email as string)) {
        console.log('Correo no válido:', email);
        // return false;
      }
      return '/home';
    }
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
};

const auth = async (req: NextApiRequest, res: NextApiResponse) =>
  await NextAuth(req, res, authOptions);

export default auth;