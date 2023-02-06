import styled from 'styled-components';
import TypeWriter from './TypeWriter';

const SkillsStyle = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: 4rem;
        color: var(--lightGreen);
    }
`


export default function Strengths() {
    const strengths = [
        'passionate',
        'Adaptable',
        'curious',
        'really weird'
    ]

    return (
        <SkillsStyle>
            <h1>
                I consider myself <TypeWriter words={strengths} />
            </h1>
        </SkillsStyle >

    )
}