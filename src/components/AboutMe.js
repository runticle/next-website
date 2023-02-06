import Image from 'next/image';
import styled from 'styled-components';

const AboutMeStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
    }
`

const ImageContainer = styled.div`
    width: 40%;
    height: 40vh;
    border-radius: 80% 0;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        width: 100%;
    }

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

    @media screen and (max-width: 767px) {
        width: 100%;
    }

    padding-bottom: 100px; // TODO REMOVE AND FIX FOOTER
    
`;

export default function AboutMe() {
    const title = `Hi, I'm Alfie`
    const subtitle = `I'm a web developer with extensive experience in React, React Native, and NodeJS.`
    // const description = `I have been in the software world officially for 4 years, but my interest spans far longer. 10 years ago I took a year out of university to build a bitcoin brokerage company. This led to the self taught development of a website built in html, php, and javascript. It was awful, but that's where it all began...`
    const description = `Officially been in the software world for 4 years, but have dabbled for much longer. Founded a successful Bitcoin Brokerage in 2013. Most recently worked at LeSalon - a startup based in London.`

    return (
        <AboutMeStyles>
            <TextContainer>
                <h1>
                    {title}
                </h1>
                <h2>
                    {subtitle}
                </h2>
                <p>
                    {description}
                </p>
            </TextContainer>
            <ImageContainer>
                <Image src="/analog-me.JPG" alt="Me" fill className={'image'} />
            </ImageContainer >
        </AboutMeStyles >
    );
}
