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

const getRandomNumberUpTo = (n) => Math.floor(Math.random() * n)

export default function Bird({ positionMap = {}, gameStep, birdShit }) {
    const nextPosition = positionMap[gameStep]
    if (!nextPosition) return null
    const { x, y } = nextPosition;

    // bird has to randomnly poop.
    // function from the game file to do so, need to send back position and track that

    const left = x + 'px';
    const top = y + 'px';

    const iShouldShit = getRandomNumberUpTo(1000) < 5;

    if (iShouldShit && gameStep > 100) {
        birdShit({ x, y })
    }

    return <BirdSprite style={{ left, top }} />
}