import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Router from 'next/router'

export default function Projects() {
    const stuff = [
        {
            title: 'Garden Gremlins',
            description: "Arcade style shooter game built in react for my dads birthday.",
            imageUrl: "/images/thebirds/thebirds.jpg",
            action: () => Router.push({ pathname: `/projects/garden-gremlins` })
        },
        {
            title: 'Floating Thoughts',
            description: "Fun way to visualise your thoughts.",
            imageUrl: "/FloatingThoughts.png", // TODO photo of bubble
            action: () => Router.push({ pathname: `/projects/floating-thoughts` })
        },
        // {
        //   title: 'Buba',
        //   description: 'Photos of my best pal',
        //   imageUrl: "/buba.jpg",
        //   action: () => Router.push({ pathname: `/buba` })
        // },
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
                <meta name="description" content="Projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stuffs stuff={stuff} />
        </>
    )
}
