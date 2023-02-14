import Head from 'next/head';
import Project from '@/components/Project';

export default function Makersrich() {

    const title = "Makersrich"

    const introduction = [
        "An educational game built in React that my group made for our final project at Makers Academy.",
        "Sadly the repo has disappeared so it is no more."
    ]

    const websiteUrl = null;

    const imageSrc = '/makersrich.png';

    return (
        <>
            <Head>
                <title>Alfie Freeman</title>
                <meta name="description" content="Makersrich" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Project title={title} introduction={introduction} websiteUrl={websiteUrl} imageSrc={imageSrc} />
        </>
    )

}

