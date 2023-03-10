import styled from 'styled-components';
import TextBlock from './shared/TextBlock';
import TypeWriter from './shared/TypeWriter';

const SkillsStyle = styled.div`

height: 100vh;
display: flex;
align-items: center;
justify-content: center;

h1 {
    text-align: center;
    color: var(--lightGreen);
}
`


export default function Skills() {
    const tech = [
        'Javascript',
        'NextJS',
        'HTML5',
        'React Native',
        'SCSS',
        'Hugo',
        'React',
        'Redux',
        'NodeJS',
        'CSS',
        'Jest',
        'graphql',
        'AWS',
        'SQL',
    ]

    return (
        <SkillsStyle>
            <h1>
                <TypeWriter words={tech} />
            </h1>
        </SkillsStyle >

    )
}