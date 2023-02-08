
import styled from "styled-components"

const PausedBox = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    top: 400px;
    left: 350px;
    
    text-align: center;

    border-radius: 10px;
    box-sizing: border-box;

    opacity: 0.9;
    border: 5px solid black;
    background: linear-gradient(-45deg, #fce8a4, #fad355, #eab70e, brown);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite;

    z-index: 500;

`


export default function Paused({ isPaused, resume }) {
    if (!isPaused) return null

    return <PausedBox>
        <h2>
            Paused
        </h2>
        <button onClick={resume}>
            Resume
        </button>
        {/* <p>
            Press space to resume
        </p> */}
    </PausedBox>
}