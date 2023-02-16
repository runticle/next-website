import Project from '@/components/Project'
import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Router from 'next/router'


const projects = [
    {
        title: "Floating Thoughts",
        introduction: [
            "I use this for visualising my todo list.",
            "You can add your thoughts or ideas and they float around aimlessly until you pop them.",
            "It was very simple to code. I just used it to learn more about css transitions and animations."
        ],
        websiteUrl: 'https://todo.alfiefreeman.co.uk',
        githubUrl: 'https://github.com/runticle/floating-thoughts',
        imageSrc: '/FloatingThoughts.png',
    },
    {
        title: "Garden Gremlins",
        introduction: [
            "A simple arcade style shooting game Imade for my dads birthday",
            "You can shoot birds and try to avoid the falling shit or you will die.",
            "It is built in React, which isn't very good for building games, but it was a lot of fun to make."
        ],
        websiteUrl: 'https://thebirds.alfiefreeman.co.uk',
        githubUrl: 'https://github.com/runticle/garden-gremlins',
        imageSrc: '/images/thebirds/thebirds.jpg',
    },
    {

        title: "Makersrich",
        introduction: [
            "An educational game built in React that my group made for our final project at Makers Academy.",
            "Sadly the repo has disappeared so it is no more."
        ],
        websiteUrl: null,
        imageSrc: '/makersrich.png',
    }
]

export default function Projects() {
    return (
        <>
            <Head>
                <title>Alfie Freeman</title>
                <meta name="description" content="Projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                projects.map((project, index) => <Project key={index} {...project} />)
            }


        </>
    )
}
