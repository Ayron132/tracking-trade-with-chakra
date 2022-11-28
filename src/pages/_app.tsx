import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme';
import { AuthContextProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Projeto Tracking Trade</title>
      </Head>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthContextProvider>
    </>
  )
}
