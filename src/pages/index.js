import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Strengths from '@/components/Strengths'
import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Image from 'next/image'

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
      <Skills />
      <Strengths />
    </>
  )
}
