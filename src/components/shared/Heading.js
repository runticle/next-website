import styled from "styled-components"

const HeadingStyles = styled.h1`
    color: var(--lightGreen);
    text-align: center;
`


export default function Heading({ children }) {
    return (
        <HeadingStyles>
            {children}
        </HeadingStyles>
    )
}