import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Next.js Boilerplate' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
