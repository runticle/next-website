import AboutMe from '@/components/AboutMe'
import Leaves from '@/components/shared/Leaves'
import LifeTree from '@/components/LifeTree'
import Head from 'next/head'
import MoreAboutMe from '@/components/MoreAboutMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alfie Freeman</title>
        <meta name="description" content="Random stuff I like" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe />
      <MoreAboutMe />
      <LifeTree />

      {/* Leaves at the bottom 🍃*/}
      <Leaves />
    </>
  )
}
