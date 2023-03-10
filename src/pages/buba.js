import Head from 'next/head';
import bubaPhotoKeys from '@/utils/bubaPhotoKeys';
import Stuffs from '@/components/Stuffs';
import TextBlock from '@/components/shared/TextBlock';

export default function Buba() {
  const base = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_fill,w_500,h_500/v1675682672/buba-stills/`

  const bubaArray = bubaPhotoKeys.map(i => base + i + '.jpg')

  const stuff = bubaArray.map(i => ({
    title: null,
    description: null,
    imageUrl: i,
    action: null
  }))

  const introduction = [
    'Here is a selection of photos of Buba.',
    'I found her in 2019.',
  ]

  return (
    <>
      <Head>
        <title>Alfie Freeman</title>
        <meta name="description" content="Buba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TextBlock text={introduction} />
      <Stuffs stuff={stuff} />
    </>
  )

}

