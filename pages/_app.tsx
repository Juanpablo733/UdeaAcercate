import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import PrivateLayout from '@/layouts/PrivateLayout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <>
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
    <ToastContainer/>
    </>
  )
}
