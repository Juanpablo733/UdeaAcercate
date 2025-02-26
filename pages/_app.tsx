import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import localFont from "next/font/local";
const dinFont = localFont({ src: "./fonts/dinpro_bold.otf", variable: "--font-din" });

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <>
      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <main className={`${roboto.className} ${dinFont.variable}`}>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
        <ToastContainer />
      </ApolloProvider>
    </>
  )
}
