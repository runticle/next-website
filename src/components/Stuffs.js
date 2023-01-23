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
            imageUrl: "www.placecage.com/c/400/400"
        },
        {
            title: 'Spooky Video',
            description: "Dad made this for visuals for a Halloween party.",
            imageUrl: "www.placecage.com/c/400/400"
        },
        {
            title: 'Spooky Video',
            description: "Dad made this for visuals for a Halloween party.",
            imageUrl: "www.placecage.com/c/400/400"
        },
        {
            title: 'Spooky Video',
            description: "Dad made this for visuals for a Halloween party.",
            imageUrl: "www.placecage.com/c/400/400"
        },
        {
            title: 'Spooky Video',
            description: "Dad made this for visuals for a Halloween party.",
            imageUrl: "www.placecage.com/c/400/400"
        },
]

    return (
        <StuffsStyles>
            {stuff.map((item, index) => <Card key={index} {...item} />)}
        </StuffsStyles>
    )
}