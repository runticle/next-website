import TextBlock from '@/components/shared/TextBlock';
import Image from 'next/image';
import styled from 'styled-components';

const ProjectStyles = styled.main`
    min-height: 100vh;
`

const Section = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    background: var(--lightGreen);
    border-radius: var(--spacing);
    box-shadow: var(--boxShadowSection);
    padding: var(--spacing);
    
    background: linear-gradient(170deg, var(--lightGreen) 0%, var(--middleGreen) 100%); 

    a{
        text-decoration: underline;
    }
    
    * {
        color: var(--darkGreen);
    }

    .imageBox {
        width: 70%;
        /* height: 350px; */
        overflow: hidden;
        max-width: 600px;
        max-height: 350px;

        margin: 0 auto;

         > div {
            position: unset !important;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
        }


        .image {
            object-fit: cover;
            width: 100% !important;
            position: relative !important;
            height: 100% !important;
        }
    }
    
`

export default function Project({ title, introduction, websiteUrl, imageSrc }) {

    return (
        <ProjectStyles>
            <h1>
                {title}
            </h1>
            <Section>
                <TextBlock text={introduction} />
                {
                    websiteUrl ? <p>
                        You can play around with it <a href={websiteUrl} alt={websiteUrl} target="_blank" rel="noreferrer">here</a>
                    </p> : null
                }
                <div className="imageBox">
                    <div className="image-overlay">
                        <Image src={imageSrc} alt={title + ' screenshot'} fill className="image" />
                    </div>
                </div>
            </Section>
        </ProjectStyles>
    )

}

