import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Auth0ErrorBoundary from '../components/Auth0ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0ErrorBoundary>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Auth0ErrorBoundary>
  )
}

export default MyApp