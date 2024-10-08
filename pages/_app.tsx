import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ErrorBoundary } from '@auth0/nextjs-auth0/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ErrorBoundary>
  )
}

export default MyApp