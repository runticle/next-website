import styled from "styled-components"


const BulletSprite = styled.div`
    position: absolute;
    
    width: 10px;
    height: 10px;

    border-radius: 50%;

    z-index: 10;
    background-color: red;
`

export default function Bullet({ position }) {
    const { x, y } = position;

    // console.log('Bullet', position)

    const left = x + 'px';
    const bottom = y + 'px';

    return <BulletSprite style={{ left, bottom }} />
}