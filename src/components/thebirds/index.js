import Bird from "@/components/thebirds/Bird"
import Bullet from "@/components/thebirds/Bullet"
import Gun from "@/components/thebirds/Gun"
import generateLevel0 from "@/components/thebirds/levelBuilder"
import useEventListener from "@/utils/useEventListener"
import { useState, useEffect, useCallback } from "react"
import { BirdCage, GameContainer, InfoBar } from "./styles"

import GAME_DATA from "./gameData"
import Shit from "./Shit"

export default function TheBirds() {
    const [userData, updateUserData] = useState(GAME_DATA.INITIAL_USER_DATA)

    const [timeElapsed, progressTime] = useState(0)
    const [timerPaused, toggleTimer] = useState(true)
    const [birdPaths, setBirdPaths] = useState(null) // EXPERIMENTAL
    const [gameStep, progressGameStep] = useState(0)
    const [bulletPositions, progressBullets] = useState([])
    const [kills, addKill] = useState(0)
    const [gameStatus, updateGameStatus] = useState('PLAY')
    const [gunPosition, moveGun] = useState({ x: userData.INITIAL_GUN_POSITION_X, y: 0, last: null })

    const [playerHealth, editHealth] = useState(userData.INITIAL_HEALTH)

    const [shitPositions, progressBirdShit] = useState([])

    const [buttonsDown, changeButtonStatus] = useState({
        up: false,
        down: false,
        right: false,
        left: false,
    })

    const birdShit = (position) => {
        progressBirdShit(prevShitPositions => ([...prevShitPositions, position]))
    }

    const updateBirdShit = useCallback(() => {
        const newShitPositions = []

        shitPositions.forEach(bullet => {
            if (bullet.y > 950) return
            const newPosition = {
                x: bullet.x,
                y: bullet.y + GAME_DATA.SHIT_SPEED,
            }

            newShitPositions.push(newPosition)
        })

        progressBirdShit(newShitPositions)
    }, [shitPositions, progressBirdShit])

    const updateBulletPositions = useCallback(() => {
        const newBulletPositions = []

        bulletPositions.forEach(bullet => {
            if (bullet.y > 950) return
            const newPosition = {
                x: bullet.x,
                y: bullet.y + userData.BULLET_SPEED,
            }

            newBulletPositions.push(newPosition)
        })

        progressBullets(newBulletPositions)
    }, [progressBullets, userData, bulletPositions])

    const killbird = useCallback((birdIndex, bulletIndex) => {
        const leftoverBullets = bulletPositions.filter((_, index) => index !== bulletIndex)
        progressBullets(leftoverBullets)

        // this might be very inefficent 
        // could just set the bird to null?
        const leftoverBirds = birdPaths.filter((_, index) => index !== birdIndex)
        setBirdPaths(leftoverBirds)

        addKill(prevKills => prevKills + 1)
    }, [bulletPositions, birdPaths])

    // TODO gun collisions
    const checkForCollisions = useCallback(() => {
        for (const [birdIndex, bird] of birdPaths.entries()) {

            // this is undefined when the game ends. why?
            const bird_x = bird[gameStep].x;
            const bird_y = bird[gameStep].y;

            for (const [bulletIndex, bullet] of bulletPositions.entries()) {
                if (
                    bullet.x + 10 > bird_x // bullet width
                    && bullet.x < bird_x + GAME_DATA.BIRD_WIDTH // bird width
                    && bird_y > 1000 - bullet.y - 10 - GAME_DATA.BIRD_HEIGHT
                    && bird_y < 1000 - bullet.y
                ) {
                    killbird(birdIndex, bulletIndex)
                }
            }
        }


        for (const [shitIndex, shit] of shitPositions.entries()) {

            // this is undefined when the game ends. why?
            const shit_x = shit.x;
            const shit_y = shit.y;

            if (
                gunPosition.x + 10 > shit_x // gunPosition width
                && gunPosition.x < shit_x + 10 // bird width
                && shit_y > 1000 - gunPosition.y - 10 - 10
                && shit_y < 1000 - gunPosition.y
            ) {
                console.log('SHIT!')

                // damage player
            }

        }



    }, [bulletPositions, birdPaths, killbird, gameStep, shitPositions, gunPosition])

    // TODO gun boundaries
    const updateGunPosition = useCallback(() => {
        moveGun(prevGunPosition => {
            const { left, right, up, down, last } = buttonsDown;

            let newX = prevGunPosition.x
            let newY = prevGunPosition.y

            if (left && (!last || last === 'LEFT')) newX = Math.max(0, prevGunPosition.x - userData.GUN_SPEED);
            if (right && (!last || last === 'RIGHT')) newX = Math.min(1000, prevGunPosition.x + userData.GUN_SPEED);
            if (up) newY = Math.min(800, prevGunPosition.y + userData.GUN_SPEED)
            if (down) newY = Math.max(0, prevGunPosition.y - userData.GUN_SPEED)

            return {
                x: newX,
                y: newY
            }
        })
    }, [buttonsDown, userData])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateGameStep = useCallback(() => {
        // progress game step
        if (timeElapsed > gameStep * 10) progressGameStep(prevGameStep => prevGameStep + 1)
        progressTime(prevTimeElapsed => prevTimeElapsed + GAME_DATA.GAME_PULSE) //ms

        // move bullets
        updateBulletPositions(bulletPositions)

        // check for any shit
        updateBirdShit(shitPositions)

        // check for any collisions
        checkForCollisions()

        // move the gun if necessary
        updateGunPosition()
    }, [timeElapsed, bulletPositions, progressGameStep, gameStep, checkForCollisions, updateBulletPositions, updateGunPosition, shitPositions, updateBirdShit])

    const handleKeypress = useCallback((event) => {
        switch (event.charCode) {
            // spacebar is a bulleta
            case 32:
                // and we need to throw a bullet into the mixer
                progressBullets(prevBulletPositions => ([...prevBulletPositions, { x: gunPosition.x, y: gunPosition.y }]))
                break;
            case 97: // left (a)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    left: true,
                    last: 'LEFT'
                }))
                break
            case 100: // right (d)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    right: true,
                    last: 'RIGHT'
                }))
                break
            case 119: // up (w)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    up: true
                }))
                break
            case 115: // down (s)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    down: true,
                }))
                break
        }
    }, [progressBullets, gunPosition, changeButtonStatus])

    const handleKeyUp = useCallback((event) => {
        // TODO store codes in variables 
        switch (event.code) {
            case 'KeyA': // left (a)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    left: false,
                    last: prevStatus.last === 'LEFT' ? null : prevStatus.last
                }))
                break
            case 'KeyD': // right (d)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    right: false,
                    last: prevStatus.last === 'RIGHT' ? null : prevStatus.last
                }))
                break
            case 'KeyW': // up (w)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    up: false,
                }))
                break
            case 'KeyS': // down (s)
                changeButtonStatus(prevStatus => ({
                    ...prevStatus,
                    down: false
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
        }, GAME_DATA.GAME_PULSE);

        // if level time is elapsed, we stop
        if (timeElapsed >= GAME_DATA.LEVEL_TIME || gameStep > 2000) {
            updateGameStatus('STOP')
            clearInterval(interval)
        }

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
        }
    }, [updateGameStep, timerPaused, gameStep, timeElapsed]);

    const generateLevel = () => {
        console.time('Generating Level 0')
        const data = generateLevel0()
        console.timeEnd('Generating Level 0')

        // set predetermined bird paths
        setBirdPaths(data)
    }

    if (birdPaths === null) {
        generateLevel()

        return (
            <div> Loading </div>
        )
    }

    return (
        <GameContainer>
            {gameStatus === 'STOP' ? null :
                <BirdCage>
                    {
                        birdPaths.map((bird, index) => (
                            <Bird birdShit={birdShit} key={index} positionMap={bird} gameStep={gameStep} />
                        ))
                    }
                    {
                        bulletPositions.map((bullet, index) => (
                            <Bullet key={index} position={bullet} />
                        ))
                    }
                    {
                        shitPositions.map((shit, index) => (
                            <Shit key={index} position={shit} />
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
                    progressBirdShit([])
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