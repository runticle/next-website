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


const LEVEL_DATA = {
    LEVEL_0: {
        INITIAL_POSITIONS: [
            {
                x: 100,
                y: -50,
            },
            {
                x: 550,
                y: 0,
            },
            {
                x: 1000,
                y: -50,
            }
        ]
    }
}

function nextBirdsPositions(currentPositions) {
    const newPositions = []

    currentPositions.forEach(bird => {
        const newPosition = {
            x: bird.x,
            y: bird.y + 3,
        }

        newPositions.push(newPosition)
    })

    return newPositions;
}



export default function TheBirds() {
    const [timeElapsed, progressTime] = useState(0)
    const [timerPaused, toggleTimer] = useState(true)
    const [birdPositions, progressBirds] = useState(LEVEL_DATA.LEVEL_0.INITIAL_POSITIONS)

    // the game function.
    // fires every 100ms
    // update clock
    // update bird positions
    // update bullet positions

    // TODO maybe sort this out, check performace
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function updateGameStep() {
        if (timeElapsed < LEVEL_TIME) {
            const newBirdPositions = nextBirdsPositions(birdPositions)
            progressBirds(newBirdPositions)
            progressTime(prevTimeElapsed => prevTimeElapsed + 100) //ms
        } else {
            window.alert('GAME OVER')
            clearInterval(interval)
        }
    }

    const LEVEL_TIME = 30000 // ms

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerPaused) return () => clearInterval(interval);
            updateGameStep()
        }, 100);

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
        }
    }, [updateGameStep, timerPaused]);



    return (
        <GameContainer>
            <BirdCage>
                {
                    birdPositions.map((bird, index) => (
                        <Bird key={index} position={bird} />
                    ))
                }
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
                    progressBirds(LEVEL_DATA.LEVEL_0.INITIAL_POSITIONS) // initial
                }
                }>
                    Reset
                </button>
                <p>Time: {(timeElapsed / 1000).toFixed(2)} </p>
            </InfoBar>
        </GameContainer>
    )
}