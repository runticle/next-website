import styled from "styled-components"

const GameContainer = styled.div`
   @font-face {
        font-family: 'pixel';
        src: url('/arcade.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    font-family: 'pixel', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    border: 5px solid black;
    background-image: url('/images/thebirds/thebirds.jpg');
    background-size: cover;
    background-position: center;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    overflow: hidden;

    button {
        padding: 10px;
        background-color: black;
        font-family: 'pixel', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #eab70e;
        border: 5px solid black;
        font-size: 1.5rem;
        outline: none !important; // hmm
        box-sizing: border-box;

        &:hover{
            box-shadow: 2px 2px 5px #333;
            cursor: pointer;
            transform: scale(1.02);
        }
    }

    // vars
    --infoBarHeight: 150px;
`

const BirdCage = styled.div`
    position: relative;
    bottom: var(--infoBarHeight);
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
    opacity: 0.9;
    border-top: 5px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(-45deg, #fce8a4, #fad355, #eab70e, brown);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite;
`

export {
    GameContainer,
    BirdCage,
    InfoBar
}