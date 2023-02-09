import { GameBox, InnerGameBox } from "./styles"

export default function GameEnd({ kills, playerHealth, newGame }) {

    let inner

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
                <button onClick={newGame}>
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
                <p>
                    <button onClick={() => window.alert('Coming soon!')}>
                        Next Level
                    </button>
                </p>
                <button onClick={newGame}>
                    New Game
                </button>
            </div>
        )
    }

    return (
        <GameBox>
            <InnerGameBox>
                {inner}
            </InnerGameBox>
        </GameBox>
    )
}