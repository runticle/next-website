import styled from "styled-components"

const TextStyle = styled.div`
    padding: var(--spacing);
    text-align: center;
`

export default function TextBlock({ text = [] }) {
    if (!text.length) return null

    return (
        <TextStyle>
            {
                text.map((i, index) => <p key={index}>{i}</p>)
            }
        </TextStyle>
    )
}