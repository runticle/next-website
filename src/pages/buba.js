import Head from 'next/head';
import bubaPhotoKeys from '@/utils/bubaPhotoKeys';
import Stuffs from '@/components/Stuffs';

export default function Buba() {
  const base = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_300,h_300/v1675682672/buba-stills/`

  const bubaArray = bubaPhotoKeys.map(i => base + i + '.jpg')

  const stuff = bubaArray.map(i => ({
    title: null,
    description: null,
    imageUrl: i,
    action: null
  }))

  return (
    <>
      <Head>
        <title>Alfie Freeman</title>
        <meta name="description" content="Buba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stuffs stuff={stuff} />
    </>
  )

}

