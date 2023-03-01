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
    border-radius: 70% 0;
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
    const subtitle = `Frontend developer`
    const description =
        [
            `I co-founded a successful Bitcoin Brokerage in 2013`,
            `But I studied and worked in Mechanical and Acoustic engineering until 2018...`,
            `...and then did a coding bootcamp at Makers Academy in London`,
            `Senior developer at LeSalon - a startup based in London`,
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
