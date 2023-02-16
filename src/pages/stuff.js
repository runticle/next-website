import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Router from 'next/router'

export default function Stuff() {
  const stuff = [
    {
      title: 'Buba',
      description: 'Photos of my best pal',
      imageUrl: "/buba.jpg",
      action: () => Router.push({ pathname: `/buba` })
    },
  ]

  return (
    <>
      <Head>
        <title>Alfie Freeman</title>
        <meta name="description" content="Random stuff I like" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stuffs stuff={stuff} />
    </>
  )
}
