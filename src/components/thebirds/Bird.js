import styled from "styled-components"


const BirdSprite = styled.div`
    position: absolute;
    
    width: 50px;
    height: 20px;

    z-index: 10;
    background-color: lightgreen;
`

export default function Bird({ position }) {
    const { x, y } = position;

    // console.log('Bird', position)

    const left = x + 'px';
    const top = y + 'px';

    return <BirdSprite style={{ left, top }} />
}