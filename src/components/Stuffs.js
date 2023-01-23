import Router from "next/router"
import styled from "styled-components"
import Card from "./Card"

const StuffsStyles =styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export default function Stuffs() {
    const stuff = [
        {
            title: 'Spooky Video',
            description: "Dad made this for visuals for a Halloween party.",
            imageUrl: "https://placekitten.com/400/400"
        },
        {
            title: 'Buba',
            description: 'Best dog in the world',
            imageUrl: "/buba.jpg",
            action: () =>  Router.push( { pathname: `/buba`})
        }
]

    return (
        <StuffsStyles>
            {stuff.map((item, index) => <Card key={index} {...item} />)}
        </StuffsStyles>
    )
}