import toPixel from "@/utils/toPixel";
import styled from "styled-components"
import GAME_DATA from "./gameData";


const BulletSprite = styled.div`
    position: absolute;

    border-radius: 50%;

    z-index: 10;
    background-color: red;
`

export default function Bullet({ position }) {
    const { x, y } = position;

    const { BULLET_SIZE } = GAME_DATA;

    const width = toPixel(BULLET_SIZE);
    const height = toPixel(BULLET_SIZE);

    const left = toPixel(x)
    const bottom = toPixel(y)

    return <BulletSprite style={{ left, bottom, width, height }} />
}