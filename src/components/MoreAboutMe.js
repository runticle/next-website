import Image from 'next/image';
import styled from 'styled-components';
import Heading from './shared/Heading';

const AboutMeStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: var(--spacing);
    max-width: 1000px;
    margin: 0 auto;
    margin-top: var(--headerHeight);

    position: relative;

    .images {
        width: 30vw;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: var(--boxShadowSection);
    }

    @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        text-align: center;

        .images {
            width: 100%;
        }
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 30vh;
    /* border-radius: 5px; */
    overflow: hidden;
    
    @media screen and (max-width: 767px) {
        width: 100%;    
        height: 50vw;
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

const Quote = styled.p`
    color: var(--middleGreen);
    line-height: 2rem;
    text-align: center;
    font-family: 'tender';
    text-transform: uppercase;
    /* padding-top: calc(var(--spacing) * 4); */

`

const TextContainer = styled.div`
    width: 100%;
    color: var(--lightGreen);
    line-height: 2rem;
    text-align: center;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export default function MoreAboutMe() {
    const description =
        [
            "I'm a thoughtful, compassionate, and slightly quirky character.",
            "I love nature and being outdoors. Ask me about Fungi or Leaf Cutter ants...",
            "I love to travel, and see the happiness that exists in the most unexpected places.",
            "I enjoy writing stories and poems.",
            "I sometimes draw maps and I sometimes paint.",
            "I love techno."
        ]

    const images = [
        "/images/me/coffee.JPG",
        "/images/me/colca.jpg"
    ]

    const quote = "The greatest happiness in the world is to make others happy. - Luther Burbank"

    return (
        <AboutMeStyles>
            <div className="images">
                {images.map((imageUrl, index) =>
                    <ImageContainer key={index}>
                        <Image src={imageUrl} alt="Me" fill className={'image'} />
                    </ImageContainer>
                )
                }
            </div>
            <TextContainer>
                <Heading>
                    Who Am I Really
                </Heading>
                {description.map((i, index) => <p key={index}>{i}</p>)}
                <Quote>
                    {quote}
                </Quote>
            </TextContainer>
        </AboutMeStyles >
    );
}
