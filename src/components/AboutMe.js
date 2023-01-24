import Image from "next/image";
import styled from "styled-components";

const AboutMeStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ImageContainer = styled.div`
    width: 40%;
    height: 40vh;
    border-radius: 80% 0;
    overflow: hidden;

    > div {
    position: unset !important;
    }

    .image {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
    }
`;

const TextContainer = styled.div`
    width: 60%;
    padding-right: var(--spacing);
    
`

export default function AboutMe() {
    return (
        <AboutMeStyles>
            <TextContainer>
                <h1>
                    {"Hi, I'm Alfie"}
                </h1>
                <h2>
                    {"I'm a web developer with extensive experience in React, React Native, and NodeJS."}
                </h2>
                <p>
                    {"I have been in the software world officially for 4 years, but my interest spans far longer. 10 years ago I took a year out of university to build a bitcoin brokerage company. This led to the self taught development of a website built in html, php, and javascript. It was awful, but that's where it all began..."}
                </p>
            </TextContainer>
            <ImageContainer>
                <Image src="/analog-me.JPG" alt="Me" fill className={'image'}/>
            </ImageContainer>
        </AboutMeStyles>
    )
}