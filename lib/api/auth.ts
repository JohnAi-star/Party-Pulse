{
  /*import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { signIn, signUp } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    res.status(200).json({ message: 'Authenticated', user: session.user });
}*/
}

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'; // Example of a Google authentication provider

export const authOptions = {
  providers: [
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers here (like GitHub, Facebook, etc.)
  ],
  pages: {
    signIn: '/auth/signin', // Customize sign-in page if necessary
  },
  session: {
    strategy: 'jwt', // Default session strategy
  },
};
//@ts-ignore
export default NextAuth(authOptions);
