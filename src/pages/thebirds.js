import Bird from "@/components/thebirds/Bird"
import { useState, useEffect } from "react"
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
    position: absolute;
    top: 0;
    bottom: var(--infoBarHeight);
    left: 0;
    right: 0;
`

const InfoBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--infoBarHeight);
    background: red;
`



export default function TheBirds() {
    const [timeElapsed, progressTime] = useState(0)
    const [timerPaused, toggleTimer] = useState(true)
    const [birdPosition, progressBird] = useState({ x: 0, y: 0 })
    const LEVEL_TIME = 30;

    useEffect(() => {
        // setup a timer for the clock. This will control the level time.
        const interval = setInterval(() => {
            // if paused, do nothing
            if (timerPaused) return () => clearInterval(interval);

            if (timeElapsed < LEVEL_TIME) {
                progressTime(prevTimeElapsed => prevTimeElapsed + 1)
            }
            else {
                window.alert('GAME OVER')
                clearInterval(interval)
            }
        }, 1000);

        // setup a timer for the birds. This will control their positions on the screen.
        const birdInterval = setInterval(() => {
            // if paused, do nothing
            if (timerPaused) return () => clearInterval(birdInterval);

            if (timeElapsed < LEVEL_TIME) {
                progressBird(({ x, y }) => ({ x: x + 5, y: y + 5 }))
            }
            else {
                clearInterval(birdInterval)
            }
        }, 100);

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
            clearInterval(birdInterval)
        }
    }, [timeElapsed, timerPaused]);

    return (
        <GameContainer>
            <BirdCage>
                <Bird position={birdPosition} />
            </BirdCage>
            <InfoBar>
                <button onClick={() => toggleTimer(false)}>
                    Start
                </button>
                <button onClick={() => toggleTimer(true)}>
                    Pause
                </button>
                <button onClick={() => {
                    toggleTimer(true)
                    progressTime(0) // reset
                    progressBird({ x: 0, y: 0 }) // initial
                }
                }>
                    Reset
                </button>
                <p>Time: {timeElapsed} </p>
            </InfoBar>
        </GameContainer>
    )
}