import RootLayout from "@/components/layout/layout";
import { AppProps } from "next/app";
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

export default function App({Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}  >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  )
}