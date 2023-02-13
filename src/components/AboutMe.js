import Image from 'next/image';
import styled from 'styled-components';

const AboutMeStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 200px);
    margin-bottom: var(--spacing);

    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        text-align: center;
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
    color: var(--lightGreen);
    line-height: 2rem;
    text-align: left;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export default function AboutMe() {

    const title = `Hi, I'm Alfie`
    const subtitle = `React & React Native developer`
    const description =
        [
            `I have officially been in the software world for 4 years, but have had my toes dipped for a little longer`,
            `I co-founded a successful Bitcoin Brokerage in 2013`,
            `I recently left my role as senior developer at LeSalon - a startup based in London`,
            `Then I went travelling for ages`,
            `Now I am looking for my next adventure`,
        ]


    return (
        <AboutMeStyles>
            <TextContainer>
                <h1>
                    {title}
                </h1>
                <h2>
                    {subtitle}
                </h2>
                {description.map((i, index) => <p key={index}>{i}</p>)}
            </TextContainer>
            <ImageContainer>
                <Image src="/analog-me.JPG" alt="Me" fill className={'image'} />
            </ImageContainer >
        </AboutMeStyles >
    );
}
