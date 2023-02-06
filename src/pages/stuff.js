import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Router from 'next/router'

export default function Stuff() {
  const stuff = [
    // {
    //   title: 'Spooky Video',
    //   description: "Dad made this for visuals for a Halloween party.",
    //   imageUrl: "https://res.cloudinary.com/dvvgwzzwu/image/upload/v1675682774/buba-stills/5_yzsb7g.jpg",
    // },
    {
      title: 'Buba',
      description: 'Photos of my best pal',
      imageUrl: "/buba.jpg",
      action: () => Router.push({ pathname: `/buba` })
    },
    // {
    //   title: 'MakerzRich',
    //   description: 'Educational game built in react',
    //   imageUrl: "/buba.jpg",
    //   action: () => Router.push({ pathname: `/buba` })
    // },
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
