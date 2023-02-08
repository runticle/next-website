import styled from "styled-components"


const ShitSprite = styled.div`
    position: absolute;

    /* background-image: url('/images/thebirds/greenBird.png'); */
    /* background-size: cover;
    background-position: center; */
    
    width: 10px;
    height: 10px;

    z-index: 10;
`

export default function Shit({ position }) {
    const { x, y } = position;

    // console.log('Bullet', position)

    const left = x + 'px';
    const top = y + 'px';

    return <ShitSprite style={{ left, top }} >💩</ShitSprite>

}