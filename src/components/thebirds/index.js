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
    INITIAL_GUN_POSITION_X: 245,
    BIRD_SPEED: 1, // px / tick
    BULLET_SPEED: 10, // px / tick
    GUN_SPEED: 3,
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
    const [birdPaths, setBirdPaths] = useState(null) // EXPERIMENTAL
    const [gameStep, progressGameStep] = useState(0)
    const [gunPosition, moveGun] = useState({ x: LEVEL_DATA.INITIAL_GUN_POSITION_X, y: 0 })
    const [bulletPositions, progressBullets] = useState([])
    const [kills, addKill] = useState(0)
    const [gameStatus, updateGameStatus] = useState('PLAY')
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

        // this might be very inefficent 
        // could just set the bird to null?
        console.time('Bird is killed')
        const leftoverBirds = birdPaths.filter((_, index) => index !== birdIndex)
        setBirdPaths(leftoverBirds)
        console.timeEnd('Bird is killed')




        addKill(prevKills => prevKills + 1)
    }, [bulletPositions, birdPaths])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateGameStep = useCallback(() => {
        // progress game step
        if (timeElapsed > gameStep * 10) progressGameStep(prevGameStep => prevGameStep + 1)

        progressTime(prevTimeElapsed => prevTimeElapsed + GAME_PULSE) //ms


        // check for bullets.
        const newBulletPositions = nextBulletPositions(bulletPositions)
        progressBullets(newBulletPositions)

        // check for any collisions
        // I will check whether any birds are in the vicinity of a bullet
        for (const [birdIndex, bird] of birdPaths.entries()) {

            // this is undefined when the game ends. why?
            const bird_x = bird[gameStep].x;
            const bird_y = bird[gameStep].y;

            for (const [bulletIndex, bullet] of bulletPositions.entries()) {
                if (
                    bullet.x + 10 > bird_x // bullet width
                    && bullet.x < bird_x + 50 // bird width
                    && bird_y > 1000 - bullet.y - 10 - 20
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



    }, [timeElapsed, bulletPositions, buttonsDown, progressGameStep, birdPaths, killbird, gameStep])

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

        // if level time is elapsed, we stop
        if (timeElapsed >= LEVEL_TIME || gameStep > 500) {
            updateGameStatus('STOP')
            clearInterval(interval)
        }

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
        }
    }, [updateGameStep, timerPaused, gameStep, timeElapsed]);

    // EXPERIMENTAL
    const generateLevel = () => {
        // level ? 
        const data = generateLevel0()

        setBirdPaths(data)
    }


    if (birdPaths === null) {
        generateLevel()
    }


    if (birdPaths === null) return (
        <div> Loading </div>
    )
    // END

    return (
        <GameContainer>
            {gameStatus === 'STOP' ? null :
                <BirdCage>
                    {
                        birdPaths.map((bird, index) => (
                            <Bird key={index} positionMap={bird} gameStep={gameStep} />
                        ))
                    }
                    {
                        bulletPositions.map((bullet, index) => (
                            <Bullet key={index} position={bullet} />
                        ))
                    }
                    <Gun position={gunPosition} />
                </BirdCage>
            }
            <InfoBar>
                <button onClick={() => {
                    toggleTimer(false)
                    updateGameStatus('GO')
                }}>
                    Start
                </button>
                <button onClick={() => toggleTimer(true)}>
                    Pause
                </button>
                <button onClick={() => {
                    toggleTimer(true)
                    progressTime(0) // reset
                    generateLevel()// initial
                    progressBullets([])
                    addKill(0)
                    progressGameStep(0)
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