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


export default function Skills() {
    const tech = [
        'Javascript ',
        'NextJS',
        'HTML5',
        'React Native',
        'Hugo',
        'React',
        'Redux',
        'NodeJS',
        'CSS',
        'Jest',
        'AWS',
        'SQL',
    ]

    return (
        <SkillsStyle>
            <h1>
                My favourite tech is <TypeWriter words={tech} />
            </h1>
        </SkillsStyle >

    )
}