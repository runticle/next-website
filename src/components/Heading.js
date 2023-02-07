import styled from "styled-components"

const HeadingStyles = styled.div`
    font-size: 1.1rem;
    color: var(--lightGreen);
    text-align: center;
`


export default function Heading({ children }) {
    return (
        <HeadingStyles>
            <h1>
                {children}
            </h1>
        </HeadingStyles>
    )
}