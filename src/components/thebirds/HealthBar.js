import toPixel from "@/utils/toPixel";
import styled from "styled-components"
import GAME_DATA from "./gameData";


const HealthContainer = styled.div`
    height: 10px;
    background: linear-gradient(to right, white, lightgrey, grey);
    width: 200px;
`

const Health = styled.div`
    height: 10px;
    background: linear-gradient(to right, pink, crimson, darkred);
`

const getPercentHealth = (playerHealth) => {
    const full = GAME_DATA.INITIAL_USER_DATA.INITIAL_HEALTH

    return ((playerHealth / full) * 100) + '%'
}

export default function HealthBar({ playerHealth }) {
    const current = getPercentHealth(playerHealth)

    return <HealthContainer>
        <Health style={
            {
                width: current,
            }
        }>

        </Health>
    </HealthContainer>

}