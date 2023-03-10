import styled from "styled-components"
import Card from "./shared/Card"
import NothingToSee from "./shared/NothingToSee"

const StuffsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* padding-bottom: 100px; */
    min-height: 100vh;

    @media screen and (max-width: 767px) {
        display: block;
    }
`

export default function Stuffs({ stuff }) {
    if (!stuff.length) {
        return <NothingToSee />
    }

    return (
        <StuffsStyles>
            {stuff.map((item, index) => <Card key={index} {...item} />)}
        </StuffsStyles>
    )
}