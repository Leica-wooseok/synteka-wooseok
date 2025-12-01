import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <link
          rel='preload'
          href='/fonts/PretendardVariable.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <meta name='description' content='Synteka Bio Test Page for interview assignment' />
        <meta
          name='keywords'
          content='Synteka, bio, sample, interview, assignment, Next.js, React'
        />
        <meta name='author' content='Synteka Bio' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https:/syntekabio-test.com/' />
        <meta property='og:title' content='Synteka Bio - Test Page' />
        <meta property='og:description' content='Synteka Bio Test Page for interview assignment' />
        <meta property='og:image' content='https://syntekabio-test.com/og-image.jpg' />

        {/* Twitter Card */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://syntekabio-test.com/' />
        <meta property='twitter:title' content='Synteka Bio - Test Page' />
        <meta
          property='twitter:description'
          content='Synteka Bio Test Page for interview assignment'
        />
        <meta property='twitter:image' content='https://syntekabio-test.com/twitter-image.jpg' />
        <meta name='theme-color' content='#FFFFFF' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
