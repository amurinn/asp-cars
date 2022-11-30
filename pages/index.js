import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ASP Cars</title>
        <meta name="description" content="ASP Cars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        Hello world
      </body>
    </div>
  )
}
