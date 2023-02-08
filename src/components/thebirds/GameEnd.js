import styled from "styled-components"

const GameEndStyles = styled.div`
    position: relative;
    bottom: var(--infoBarHeight);

    /* background-color: blue; */
    margin: 0 auto;

    height: 1000px;
    width: 100%;
    /* opacity: 0.2; */

    display: flex;

    text-align: center;
    font-size: 2rem;

    h1 {
        font-size: 7rem;
    }
    `

const Box = styled.div`
    position: absolute;
    top: 300px;

    bottom: 100px;
    width: 1000px;
    left: calc(50% - 500px);

    border: 5px solid black;

    opacity: 0.9;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;

    background: linear-gradient(-45deg, #fce8a4, #fad355, #eab70e, brown);
	background-size: 400% 400%;
	animation: gradient 20s ease infinite;

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`


export default function GameEnd({ kills, playerHealth, restartLevel }) {

    let inner

    console.log('health', playerHealth)

    if (playerHealth < 1) {
        inner = (
            <div>
                <h1>
                    GAME OVER
                </h1>
                <div>
                    You were killed by bird poop.
                </div>
                <p>
                    Level: 1
                </p>
                <p>
                    Kills: {kills}
                </p>
                <button onClick={restartLevel}>
                    Try Again
                </button>
            </div>
        )
    } else {
        inner = (
            <div>
                <h1>
                    LEVEL 1 COMPLETED
                </h1>
                <p>
                    Kills: {kills}
                </p>
                <button onClick={() => window.alert('Coming soon!')}>
                    Next Level
                </button>
            </div>
        )
    }

    return (
        <GameEndStyles>
            <Box>
                {inner}
            </Box>
        </GameEndStyles>
    )
}