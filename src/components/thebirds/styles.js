import styled from "styled-components"

const GameContainer = styled.div`
    border: 5px solid black;
    background-image: url('/images/thebirds/thebirds.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.7;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;

    // vars
    --infoBarHeight: 150px;
`

const BirdCage = styled.div`
    position: relative;
    bottom: var(--infoBarHeight);

    /* background-color: blue; */
    margin: 0 auto;

    height: 1000px;
    width: 1000px;
`

const InfoBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--infoBarHeight);
    background: red;
`

export {
    GameContainer,
    BirdCage,
    InfoBar
}