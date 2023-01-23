import ContactForm from '@/components/ContactForm'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
        <Head>
            <title>Alfie Freeman</title>
            <meta name="description" content="Random stuff I like" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactForm />
    </>
  )
}
