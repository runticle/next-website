import TextBlock from '@/components/shared/TextBlock';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const ProjectStyles = styled.main`
    min-height: 100vh;
`

const Section = styled.section`
    max-width: 700px;
    margin: 0 auto;
    background: var(--lightGreen);
    border-radius: var(--spacing);
    box-shadow: var(--boxShadowSection);
    
    background: linear-gradient(45deg, var(--lightGreen) 0%, var(--middleGreen) 100%); 

    .project-links {
        padding-bottom: calc(var(--spacing) * 2);
            a {
                font-family: 'rounded';
                padding: var(--spacing) var(--spacing);
            text-transform: uppercase;
            background: none;
            border-radius: 80% 0; // leaf shape
            
            cursor: pointer;
            
            &:hover,
            &:focus {
                background: var(--lightGreen, lightGreen);
                outline: none;
                text-decoration:none;
            }
        }
    }

    * {
        color: var(--darkGreen);
    }

    .imageBox {
        width: 100%;
        /* height: 350px; */
        overflow: hidden;
        /* max-width: 600px; */
        max-height: 350px;
        border-top-left-radius: var(--spacing);
        border-top-right-radius: var(--spacing);

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

export default function Project({ title, introduction, websiteUrl, imageSrc, githubUrl }) {

    return (
        <ProjectStyles>
            <h1>
                {title}
            </h1>
            <Section>
                <div className="imageBox">
                    <div className="image-overlay">
                        <Image src={imageSrc} alt={title + ' screenshot'} fill className="image" />
                    </div>
                </div>
                <TextBlock text={introduction} />
                {
                    websiteUrl || githubUrl ? <div className="project-links">
                        {
                            websiteUrl ? <Link href={websiteUrl} alt={websiteUrl} target="_blank" rel="noreferrer">Play</Link> : null
                        }
                        {
                            githubUrl ? <Link href={websiteUrl} alt={githubUrl} target="_blank" rel="noreferrer">Github</Link> : null
                        }
                    </div>
                        : null
                }
            </Section>
        </ProjectStyles>
    )

}

