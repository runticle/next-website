import toPixel from "@/utils/toPixel"
import { useState, useCallback } from "react"
import styled from "styled-components"
import GAME_DATA from "./gameData"


const BirdSprite = styled.div`
    position: absolute;

    background-image: url('/images/thebirds/greenBird.png');
    background-size: cover;
    background-position: center;

    transform: ${props => props.flip ? 'scaleX(-1)' : 'null'};

    z-index: 10;


    &:after {
        content: 'Happy birthday!';
        width: 120px;
        margin-left: -150px;
        height: 50px;
        background: beige;
        padding: 5px;
        border-radius: 3px;

        display: ${props => !props.carryBanner || props.flip ? 'none' : 'unset'};
    }
`

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)

export default function Bird({ positionMap = {}, gameStep, birdShit, index }) {
    const [flip, flipDirection] = useState(false)

    const nextPosition = positionMap[gameStep]
    const { x, y } = nextPosition;

    const flipper = useCallback((direc) => {
        if (positionMap[gameStep + 1]['x'] < positionMap[gameStep]['x'] && flip === false) flipDirection(true)
        if (positionMap[gameStep + 1]['x'] > positionMap[gameStep]['x'] && flip === true) flipDirection(false)
    }, [gameStep, positionMap, flip])

    flipper()

    // TODO check if this actually saves on performance
    if (y < 0) return null


    const { BIRD_WIDTH, BIRD_HEIGHT } = GAME_DATA

    const width = toPixel(BIRD_WIDTH)
    const height = toPixel(BIRD_HEIGHT)

    // bird has to randomnly poop.
    // function from the game file to do so, need to send back position and track that

    const left = toPixel(x)
    const top = toPixel(y)

    const iShouldShit = getRandomNumberUpTo(1000) < 5;

    if (iShouldShit && y > 100) {
        birdShit({ x, y })
    }

    const carryBanner = index === 0

    return <BirdSprite carryBanner={carryBanner} style={{ left, top, width, height }} flip={flip} />
}