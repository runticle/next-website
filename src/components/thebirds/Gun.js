import toPixel from "@/utils/toPixel";
import styled from "styled-components"
import GAME_DATA from "./gameData";


const GunSprite = styled.div`
    position: absolute;
    bottom: 0;

    background-image: url('/images/thebirds/apollo13.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 50%;
`

export default function Gun({ position }) {
    const { x, y } = position

    const { GUN_WIDTH, GUN_HEIGHT } = GAME_DATA.INITIAL_USER_DATA

    const width = toPixel(GUN_WIDTH)
    const height = toPixel(GUN_HEIGHT)

    const left = toPixel(x)
    const bottom = toPixel(y)

    return <GunSprite style={{ left, bottom, width, height }} />
}