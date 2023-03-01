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
    border-radius: var(--spacing);
    padding: var(--spacing);

    .project-links {
        padding-bottom: var(--spacing);
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
        color: var(--lightGreen);
    }

    .imageBox {
        overflow: hidden;
        height: 400px;
        width: 400px;
        margin: 0 auto;

        border-radius: 50%;
        box-shadow: var(--boxShadowSection);
        
        @media screen and (max-width: 768px) {
            width: 80vw;
            height: 80vw;
        }
        
        .image {
            object-fit: cover;
            position: relative !important;
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
                    {/* <div className="image-overlay"> */}
                    <Image src={imageSrc} alt={title + ' screenshot'} fill className="image" />
                    {/* </div> */}
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

