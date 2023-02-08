import Bird from "@/components/thebirds/Bird"
import Bullet from "@/components/thebirds/Bullet"
import Gun from "@/components/thebirds/Gun"
import generateLevel0 from "@/components/thebirds/levelBuilder"
import useEventListener from "@/utils/useEventListener"
import { useState, useEffect, useCallback } from "react"
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

const LEVEL_DATA = {
    INITIAL_GUN_POSITION_X: 400,
    BIRD_SPEED: 1, // px / tick
    BULLET_SPEED: 2, // px / tick
    GUN_SPEED: 4,
    LEVEL_0: {
        INITIAL_POSITIONS: [
            {
                x: 0,
                y: -50,
            },
            {
                x: 390,
                y: 0,
            },
            {
                x: 900,
                y: -50,
            },
            {
                x: 0,
                y: -10,
            },
            {
                x: 300,
                y: 0,
            },
            {
                x: 900,
                y: -170,
            },
            {
                x: 0,
                y: -100,
            },
            {
                x: 390,
                y: 50,
            },
            {
                x: 900,
                y: -150,
            },
        ]
    }
}

function nextBirdsPositions(currentPositions) {
    const newPositions = []

    currentPositions.forEach(bird => {
        const newPosition = {
            x: bird.x,
            y: bird.y + LEVEL_DATA.BIRD_SPEED,
        }

        newPositions.push(newPosition)
    })

    return newPositions;
}

function nextBulletPositions(currentPositions) {
    const newPositions = []

    currentPositions.forEach(bullet => {
        const newPosition = {
            x: bullet.x,
            y: bullet.y + LEVEL_DATA.BULLET_SPEED,
        }

        newPositions.push(newPosition)
    })

    return newPositions;
}



export default function TheBirds() {
    const [timeElapsed, progressTime] = useState(0)
    const [timerPaused, toggleTimer] = useState(true)
    const [birdPositions, progressBirds] = useState(null) // EXPERIMENTAL
    const [gunPosition, moveGun] = useState({ x: LEVEL_DATA.INITIAL_GUN_POSITION_X, y: 0 })
    const [bulletPositions, progressBullets] = useState([])
    const [kills, addKill] = useState(0)
    const [buttonsDown, changeButtonStatus] = useState({
        up: false,
        down: false,
        right: false,
        left: false,
    })
    const LEVEL_TIME = 30000 // ms
    const GAME_PULSE = 10; // ms



    const killbird = useCallback((birdIndex, bulletIndex) => {
        const leftoverBullets = bulletPositions.filter((_, index) => index !== bulletIndex)
        progressBullets(leftoverBullets)

        const leftoverBirds = birdPositions.filter((_, index) => index !== birdIndex)
        progressBirds(leftoverBirds)

        addKill(prevKills => prevKills + 1)
    }, [birdPositions, bulletPositions])

    // the game function.
    // fires every 100ms
    // update clock
    // update bird positions
    // update bullet positions

    // TODO maybe sort this out, check performace
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateGameStep = useCallback(() => {
        // if level time is elapsed, we stop
        if (timeElapsed >= LEVEL_TIME) {
            window.alert('GAME OVER')
            clearInterval(interval)
        }

        // calculate new bird positions and progress the ticker
        const newBirdPositions = nextBirdsPositions(birdPositions)
        progressBirds(newBirdPositions)
        progressTime(prevTimeElapsed => prevTimeElapsed + GAME_PULSE) //ms


        // check for bullets.
        const newBulletPositions = nextBulletPositions(bulletPositions)
        progressBullets(newBulletPositions)

        // check for any collisions
        // I will check whether any birds are in the vicinity of a bullet
        for (const [birdIndex, bird] of birdPositions.entries()) {
            for (const [bulletIndex, bullet] of bulletPositions.entries()) {
                if (
                    bullet.x + 10 > bird.x // bullet width
                    && bullet.x < bird.x + 50 // bird width
                    && bird.y > 1000 - bullet.y - 10 - 20
                ) {
                    killbird(birdIndex, bulletIndex)
                }
            }
        }

        // move the gun if necessary
        moveGun(prevGunPosition => {
            const { left, right, up, down } = buttonsDown;

            let newX = prevGunPosition.x
            let newY = prevGunPosition.y

            if (left) newX = prevGunPosition.x - LEVEL_DATA.GUN_SPEED;
            if (right) newX = prevGunPosition.x + LEVEL_DATA.GUN_SPEED;
            if (up) newY = prevGunPosition.y + LEVEL_DATA.GUN_SPEED;
            if (down) newY = prevGunPosition.y - LEVEL_DATA.GUN_SPEED;

            return {
                x: newX,
                y: newY
            }
        })



    }, [timeElapsed, birdPositions, killbird, bulletPositions, buttonsDown])

    const handleKeypress = useCallback((event) => {
        console.log(event.charCode)
        switch (event.charCode) {
            // spacebar is a bulleta
            case 32:
                // and we need to throw a bullet into the mixer
                progressBullets(prevBulletPositions => ([...prevBulletPositions, { x: gunPosition.x, y: gunPosition.y }]))
                break;
            case 97: // left (a)
                changeButtonStatus(prevStatus => ({
                    up: prevStatus.up,
                    down: prevStatus.down,
                    left: true,
                    right: false
                }))
                break
            case 100: // right (d)
                changeButtonStatus(prevStatus => ({
                    up: prevStatus.up,
                    down: prevStatus.down,
                    left: false,
                    right: true
                }))
                break
            case 119: // up (w)
                changeButtonStatus(prevStatus => ({
                    up: true,
                    down: false,
                    left: prevStatus.left,
                    right: prevStatus.right
                }))
                break
            case 115: // down (s)
                changeButtonStatus(prevStatus => ({
                    up: false,
                    down: true,
                    left: prevStatus.left,
                    right: prevStatus.right
                }))
                break
        }
    }, [progressBullets, gunPosition, changeButtonStatus])

    const handleKeyUp = useCallback((event) => {
        console.log('up', event.code)
        // TODO store codes in variables 
        switch (event.code) {
            case 'KeyA': // left (a)
                changeButtonStatus(prevStatus => ({
                    up: prevStatus.up,
                    down: prevStatus.down,
                    left: false,
                    right: false
                }))
                break
            case 'KeyD': // right (d)
                console.log('stop')
                changeButtonStatus(prevStatus => ({
                    up: prevStatus.up,
                    down: prevStatus.down,
                    left: false,
                    right: false
                }))
                break
            case 'KeyW': // up (w)
                changeButtonStatus(prevStatus => ({
                    up: false,
                    down: false,
                    left: prevStatus.left,
                    right: prevStatus.right
                }))
                break
            case 'KeyS': // down (s)
                changeButtonStatus(prevStatus => ({
                    up: false,
                    down: false,
                    left: prevStatus.left,
                    right: prevStatus.right
                }))
                break
        }
    }, [changeButtonStatus])

    useEventListener('keypress', handleKeypress)
    useEventListener('keyup', handleKeyUp)

    useEffect(() => {
        const interval = setInterval(() => {
            if (timerPaused) return () => clearInterval(interval);
            updateGameStep()
        }, GAME_PULSE);

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
        }
    }, [updateGameStep, timerPaused]);


    // EXPERIMENTAL
    if (birdPositions === null) {
        const data = generateLevel0()
        console.log('level', data)

        progressBirds(data)
    }


    if (birdPositions === null) return (
        <div> Loading </div>
    )
    // END



    return (
        <GameContainer>
            <BirdCage>
                {
                    birdPositions.map((bird, index) => (
                        <Bird key={index} position={bird} />
                    ))
                }
                {
                    bulletPositions.map((bullet, index) => (
                        <Bullet key={index} position={bullet} />
                    ))
                }
                <Gun position={gunPosition} />
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
                    progressBullets([])
                    addKill(0)
                }
                }>
                    Reset
                </button>
                <p>Time: {(timeElapsed / 1000).toFixed(2)} </p>
                <p>Kills: {kills} </p>
            </InfoBar>
        </GameContainer>
    )
}