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
      {/* <ContactForm /> TODO. Disabled AF 13/2/23 Reinstate once email is configured. */}
      <body>
        <p>
          You can email me at <a href="mailto:runticle@gmail.com?subject=Hello%20Aflie&body=Hi%20Alfie%2C%0D%0A%0D%0A...%0D%0A%0D%0ABye%20Alfie">runticle@gmail.com</a>
        </p>
      </body>
    </>
  )
}
