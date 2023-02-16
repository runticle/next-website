import Head from 'next/head';
import Project from '@/components/Project';

export default function GardenGremlins() {

    const title = "Garden Gremlins"

    const introduction = [
        "A simple arcade style shooting game Imade for my dads birthday",
        "You can shoot birds and try to avoid the falling shit or you will die.",
        "It is built in React, which isn't very good for building games, but it was a lot of fun to make."
    ]

    const websiteUrl = 'https://thebirds.alfiefreeman.co.uk';
    const githubUrl = 'https://github.com/runticle/garden-gremlins';

    const imageSrc = '/images/thebirds/thebirds.jpg';

    return (
        <>
            <Head>
                <title>Alfie Freeman</title>
                <meta name="description" content="Garden Gremlins" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Project title={title} introduction={introduction} websiteUrl={websiteUrl} imageSrc={imageSrc} githubUrl={githubUrl} />
        </>
    )

}

