import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import AndroidIcon192 from '../assets/favicon/android-icon-192x192.png'
import AppleIcon114 from '../assets/favicon/apple-icon-114x114.png'
import AppleIcon120 from '../assets/favicon/apple-icon-120x120.png'
import AppleIcon144 from '../assets/favicon/apple-icon-144x144.png'
import AppleIcon152 from '../assets/favicon/apple-icon-152x152.png'
import AppleIcon180 from '../assets/favicon/apple-icon-180x180.png'
import AppleIcon57 from '../assets/favicon/apple-icon-57x57.png'
import AppleIcon60 from '../assets/favicon/apple-icon-60x60.png'
import AppleIcon72 from '../assets/favicon/apple-icon-72x72.png'
import AppleIcon76 from '../assets/favicon/apple-icon-76x76.png'
import FaviconIcon16 from '../assets/favicon/favicon-16x16.png'
import FaviconIcon32 from '../assets/favicon/favicon-32x32.png'
import FaviconIcon96 from '../assets/favicon/favicon-96x96.png'
import MsapplicationIco from '../assets/favicon/ms-icon-144x144.png'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <link rel="apple-touch-icon" sizes="57x57" href={AppleIcon57} />
          <link rel="apple-touch-icon" sizes="60x60" href={AppleIcon60} />
          <link rel="apple-touch-icon" sizes="72x72" href={AppleIcon72} />
          <link rel="apple-touch-icon" sizes="76x76" href={AppleIcon76} />
          <link rel="apple-touch-icon" sizes="114x114" href={AppleIcon114} />
          <link rel="apple-touch-icon" sizes="120x120" href={AppleIcon120} />
          <link rel="apple-touch-icon" sizes="144x144" href={AppleIcon144} />
          <link rel="apple-touch-icon" sizes="152x152" href={AppleIcon152} />
          <link rel="apple-touch-icon" sizes="180x180" href={AppleIcon180} />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={AndroidIcon192}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={FaviconIcon32}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={FaviconIcon96}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={FaviconIcon16}
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={MsapplicationIco} />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
