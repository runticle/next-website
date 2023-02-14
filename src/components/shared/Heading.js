import styled from "styled-components"

const HeadingStyles = styled.div`
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