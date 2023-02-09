import { GameBox, InnerGameBox } from "./styles";


export default function NewGame({ startGame }) {
    return (
        <GameBox>
            <InnerGameBox>
                <div>
                    <h1>
                        NEW GAME
                    </h1>
                    <h3>
                        Controls
                    </h3>
                    <p>
                        move: w/a/s/d
                    </p>
                    <p>
                        shoot: space
                    </p>
                    <button onClick={startGame}>
                        Start Game
                    </button>
                </div>
            </InnerGameBox>
        </GameBox>
    )
}