import toPixel from "@/utils/toPixel"
import styled from "styled-components"
import GAME_DATA from "./gameData"


const BirdSprite = styled.div`
    position: absolute;

    background-image: url('/images/thebirds/greenBird.png');
    background-size: cover;
    background-position: center;

    z-index: 10;
`

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)

export default function Bird({ positionMap = {}, gameStep, birdShit }) {
    const nextPosition = positionMap[gameStep]
    if (!nextPosition) return null
    const { x, y } = nextPosition;

    const { BIRD_WIDTH, BIRD_HEIGHT } = GAME_DATA

    const width = toPixel(BIRD_WIDTH)
    const height = toPixel(BIRD_HEIGHT)

    // bird has to randomnly poop.
    // function from the game file to do so, need to send back position and track that

    const left = toPixel(x)
    const top = toPixel(y)

    const iShouldShit = getRandomNumberUpTo(1000) < 5;

    if (iShouldShit && gameStep > 100) {
        birdShit({ x, y })
    }

    return <BirdSprite style={{ left, top, width, height }} />
}