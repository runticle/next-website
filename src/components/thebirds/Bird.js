import styled from "styled-components"


const BirdSprite = styled.div`
    position: absolute;

    background-image: url('/images/thebirds/greenBird.png');
    background-size: cover;
    background-position: center;
    
    width: 40px;
    height: 40px;

    z-index: 10;
`

export default function Bird({ positionMap = {}, gameStep }) {
    const nextPosition = positionMap[gameStep]
    if (!nextPosition) return null
    const { x, y } = nextPosition;

    const left = x + 'px';
    const top = y + 'px';

    return <BirdSprite style={{ left, top }} />
}