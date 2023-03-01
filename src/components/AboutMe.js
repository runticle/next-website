import Image from 'next/image';
import styled from 'styled-components';

const AboutMeStyles = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 200px);
    margin-bottom: var(--spacing);

    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        text-align: center;
    }
`

const ImageContainer = styled.div`
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
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
    width: 100%;
    color: var(--lightGreen);
    line-height: 2rem;
    text-align: center;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export default function AboutMe() {

    const title = `Hi, I'm Alfie`
    const subtitle = `Frontend developer`
    const description =
        [
            `Co-founded a successful Bitcoin Brokerage in 2013`,
            `Senior developer at LeSalon - a startup based in London`,
            `Passionate about helping others and bringing joy`
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
                <Image src="/BIGALFIE.jpg" alt="Me" fill className={'image'} />
            </ImageContainer >
        </AboutMeStyles >
    );
}
