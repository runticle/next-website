import toPixel from "@/utils/toPixel";
import styled from "styled-components"
import GAME_DATA from "./gameData";


const ShitSprite = styled.div`
    position: absolute;

    /* background-image: url('/images/thebirds/greenBird.png'); */
    /* background-size: cover;
    background-position: center; */

    z-index: 10;
`

export default function Shit({ position }) {
    const { x, y } = position;

    const { SHIT_SIZE } = GAME_DATA

    const width = toPixel(SHIT_SIZE)
    const height = toPixel(SHIT_SIZE)

    const left = toPixel(x)
    const top = toPixel(y)

    return <ShitSprite style={{ left, top, width, height }} >💩</ShitSprite>

}