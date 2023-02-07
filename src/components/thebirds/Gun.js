import styled from "styled-components"


const GunSprite = styled.div`
    position: absolute;
    bottom: 0;

    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
`

export default function Gun({ position }) {
    // console.log('Gun', position)
    const { x, y } = position

    const left = x + 'px';

    return <GunSprite style={{ left }} />
}