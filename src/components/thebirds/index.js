import Bird from "@/components/thebirds/Bird"
import Bullet from "@/components/thebirds/Bullet"
import Gun from "@/components/thebirds/Gun"
import generateLevel0 from "@/components/thebirds/levelBuilder"
import useEventListener from "@/utils/useEventListener"
import { useState, useEffect, useCallback, useMemo } from "react"
import { BirdCage, GameContainer, InfoBar } from "./styles"

import debounce from 'lodash.debounce'

import GAME_DATA from "./gameData"
import Shit from "./Shit"
import GameEnd from "./GameEnd"
import HealthBar from "./HealthBar"
import Paused from "./Paused"

export default function TheBirds() {
    const [userData, updateUserData] = useState(GAME_DATA.INITIAL_USER_DATA)

    const [timerPaused, toggleTimer] = useState(true)
    const [waveIndex, setWaveIndex] = useState(0)
    const [wave, setNewWave] = useState([])
    const [birdPaths, setBirdPaths] = useState(null)
    const [gameStep, progressGameStep] = useState(0)
    const [bulletPositions, progressBullets] = useState([])
    const [kills, addKill] = useState(0)
    const [gameStatus, updateGameStatus] = useState('PLAY')
    const [gunPosition, moveGun] = useState(GAME_DATA.INITIAL_GUN_POSITION)

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
            if (bullet.y > 1100 - gunPosition.y) return
            const newPosition = {
                x: bullet.x,
                y: bullet.y + GAME_DATA.SHIT_SPEED,
            }

            newShitPositions.push(newPosition)
        })

        progressBirdShit(newShitPositions)
    }, [shitPositions, progressBirdShit, gunPosition])

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
        const leftoverBirds = wave.filter((_, index) => index !== birdIndex)
        setNewWave(leftoverBirds)

        addKill(prevKills => prevKills + 1)
    }, [bulletPositions, wave])

    const playerHit = useCallback((shitIndex) => {
        // damage player
        editHealth(prevHealth => prevHealth - 1)

        const leftoverShit = shitPositions.filter((_, index) => index !== shitIndex)
        progressBirdShit(leftoverShit)
    }, [shitPositions])

    const checkForCollisions = useCallback(() => {
        for (const [birdIndex, bird] of wave.entries()) {

            // this is undefined when the game ends. why?
            const bird_x = bird[gameStep].x;
            const bird_y = bird[gameStep].y;

            // checking bullets hitting birds...
            for (const [bulletIndex, bullet] of bulletPositions.entries()) {
                if (bird_y > 1000 - bullet.y) continue // bullet not reached yet
                if (bird_y < 1000 - bullet.y - GAME_DATA.BULLET_SIZE - GAME_DATA.BIRD_HEIGHT) continue // bullet gone past
                if (bullet.x + GAME_DATA.BULLET_SIZE < bird_x) continue
                if (bullet.x > bird_x + GAME_DATA.BIRD_WIDTH) continue

                killbird(birdIndex, bulletIndex)
            }
        }

        // checking shit hitting player
        for (const [shitIndex, shit] of shitPositions.entries()) {
            const shit_x = shit.x;
            const shit_y = shit.y;

            if (
                gunPosition.x + userData.GUN_WIDTH > shit_x // gunPosition width
                && gunPosition.x < shit_x + GAME_DATA.SHIT_SIZE // bird width
                && shit_y > 1000 - gunPosition.y - GAME_DATA.SHIT_SIZE - userData.GUN_HEIGHT
                && shit_y < 1000 - gunPosition.y
            ) {
                playerHit(shitIndex)
            }

        }


    }, [bulletPositions, wave, killbird, gameStep, shitPositions, gunPosition, playerHit, userData])

    const updateGunPosition = useCallback(() => {
        moveGun(prevGunPosition => {
            const { left, right, up, down, last } = buttonsDown;

            let newX = prevGunPosition.x
            let newY = prevGunPosition.y

            if (left && (!last || last === 'LEFT')) newX = Math.max(0, prevGunPosition.x - userData.GUN_SPEED);
            if (right && (!last || last === 'RIGHT')) newX = Math.min(1000, prevGunPosition.x + userData.GUN_SPEED);
            if (up) newY = Math.min(GAME_DATA.MAX_GUN_POSITION, prevGunPosition.y + userData.GUN_SPEED)
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
        progressGameStep(prevGameStep => prevGameStep + 1)

        // move bullets
        updateBulletPositions(bulletPositions)

        // check for any shit
        updateBirdShit(shitPositions)

        // check for any collisions
        checkForCollisions()

        // move the gun if necessary
        updateGunPosition()
    }, [bulletPositions, progressGameStep, checkForCollisions, updateBulletPositions, updateGunPosition, shitPositions, updateBirdShit])

    // const fireBullet = useCallback(debounce(console.log, 1000), []);

    const fireBullet = useCallback((position) => progressBullets(prevBulletPositions => ([...prevBulletPositions, position])), [progressBullets])
    const pullTrigger = useMemo(() => debounce(fireBullet, userData.RELOAD_TIME, { leading: true }), [fireBullet, userData])

    const handleKeypress = useCallback((event) => {
        switch (event.charCode) {
            // spacebar is a bulleta
            case 32:
                // and we need to throw a bullet into the mixer
                const position = { x: gunPosition.x + (userData.GUN_WIDTH / 2) - (GAME_DATA.BULLET_SIZE / 2), y: gunPosition.y + userData.GUN_HEIGHT / 2 }
                pullTrigger(position)
                // progressBullets(prevBulletPositions => ([...prevBulletPositions, position]))
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
    }, [gunPosition, changeButtonStatus, userData, fireBullet])

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

        if (playerHealth < 0) {
            updateGameStatus('END')
            clearInterval(interval)
        }

        // if wave is finished, need a new wave until no waves
        if (wave.length === 0) {
            const newWave = birdPaths[waveIndex]

            if (newWave) {
                setNewWave(birdPaths[waveIndex])

                progressGameStep(0)
                setWaveIndex(prevWaveIndex => prevWaveIndex + 1)
            } else {
                updateGameStatus('END')
                clearInterval(interval)
            }
        }

        // cleanup interval to stop a billion of them running concurrently
        return () => {
            clearInterval(interval)
        }
    }, [updateGameStep, timerPaused, gameStep, wave, birdPaths, waveIndex, playerHealth]);

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

    const restartLevel = () => {
        toggleTimer(true)
        generateLevel()// initial
        progressBullets([])
        addKill(0)
        progressGameStep(0)
        progressBirdShit([])
        editHealth(userData.INITIAL_HEALTH)
        updateGameStatus('STOP')
        moveGun(GAME_DATA.INITIAL_GUN_POSITION)
        setWaveIndex(0)
    }

    return (
        <GameContainer>
            {gameStatus === 'END' ? <GameEnd playerHealth={playerHealth} kills={kills} restartLevel={restartLevel} /> :
                <BirdCage>
                    {
                        wave.map((bird, index) => (
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
                    {/* <Paused isPaused={timerPaused} resume={() => toggleTimer(false)} /> */}
                </BirdCage>
            }
            <InfoBar>
                <div>
                    <button onClick={() => {
                        toggleTimer(false)
                        updateGameStatus('GO')
                    }}>
                        Start
                    </button>
                    <button onClick={() => toggleTimer(true)}>
                        Pause
                    </button>
                    <button onClick={restartLevel}>
                        Reset
                    </button>
                </div>
                <p>
                    Kills: {kills}
                </p>
                <HealthBar playerHealth={playerHealth} />
            </InfoBar>
        </GameContainer>
    )
}