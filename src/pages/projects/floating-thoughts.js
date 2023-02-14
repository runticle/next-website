import Head from 'next/head';
import Project from '@/components/Project';

export default function FloatingThoughts() {

    const title = "Floating Thoughts";

    const introduction = [
        "For visualising thoughts. I use this as a todo list.",
        "You can add your thoughts or ideas and they float around aimlessly until you pop them.",
        "It was very simple to code. I just used it to learn more about css transitions and animations."
    ]

    const websiteUrl = 'todo.alfiefreeman.co.uk';

    const imageSrc = '/FloatingThoughts.png';

    return (
        <>
            <Head>
                <title>Alfie Freeman</title>
                <meta name="description" content="Floating Thoughts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Project title={title} introduction={introduction} websiteUrl={websiteUrl} imageSrc={imageSrc} />
        </>
    )

}

