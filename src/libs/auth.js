import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { initializeSanityClient } from './sanity'

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    SanityCredentials(initializeSanityClient()), // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(initializeSanityClient()),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {},
}
