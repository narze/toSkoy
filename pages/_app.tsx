import Head from 'next/head'
import '../styles/base.css'
import { ThemeProvider, theme } from '@chakra-ui/core'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}): JSX.Element {
  return (
    <>
      <Head>
        <title>toSkoy - แปลงภาษาไทยเป็นภาษาสก๊อย</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/hundred-days-of-code-css-ribbon@v0.1.1/100-days-of-code-ribbon.css"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
