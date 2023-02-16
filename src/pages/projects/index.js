import Project from '@/components/Project'
import Stuffs from '@/components/Stuffs'
import Head from 'next/head'
import Router from 'next/router'


const projects = [
    {
        title: "Floating Thoughts",
        introduction: [
            "I use this for visualising my todo list.",
            "You can add your thoughts or ideas and they float around the screen aimlessly until you pop them.",
            "It was very simple to code. I just used it to learn more about css transitions and animations.",
        ],
        websiteUrl: 'https://todo.alfiefreeman.co.uk',
        githubUrl: 'https://github.com/runticle/floating-thoughts',
        imageSrc: '/FloatingThoughts.png',
    },
    {
        title: "Garden Gremlins",
        introduction: [
            "A simple arcade style shooting game I made for my dads birthday.",
            "You fly a little rocketship and shoot birds as they come at you in waves. Try to avoid the falling shit or you will die.",
            "It is built in React, which isn't very good for building games, but it was a lot of fun to make.",
        ],
        websiteUrl: 'https://thebirds.alfiefreeman.co.uk',
        githubUrl: 'https://github.com/runticle/garden-gremlins',
        imageSrc: '/images/thebirds/thebirds.jpg',
    },
    {

        title: "Makersrich",
        introduction: [
            "An educational game built in React that my group made for our final project at Makers Academy.",
            "The aim was to find Rubies and Javabeans to learn more about, yup, ruby and JS. Then you try to pass the wizards' tests.",
            "We used Firebase to enable mulitplayer, with a message board, newsfeed, and in-game interactions between online players.",
            "Sadly the repo has disappeared so you won't have the chance to play :("
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
