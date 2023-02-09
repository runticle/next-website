
import styled from "styled-components"

const PausedBox = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    top: 400px;
    left: 350px;
    
    text-align: center;

    border-radius: 10px;

    opacity: 0.9;
    border: 5px solid black;
    background: linear-gradient(-45deg, #fce8a4, #fad355, #eab70e, brown);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite;

    z-index: 500;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:30px;

`


export default function Paused({ newGame, resume }) {
    return <PausedBox>
        <h2>
            Paused
        </h2>
        <button onClick={resume}>
            Resume
        </button>
        <button onClick={newGame}>
            New Game
        </button>
    </PausedBox>
}