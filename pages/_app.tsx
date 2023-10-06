import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import PrivateLayout from '@/layouts/PrivateLayout'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PrivateLayout>
        <Component {...pageProps} />
      </PrivateLayout>
    </SessionProvider>
  )
}
