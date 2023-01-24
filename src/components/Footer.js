import styled from "styled-components"

const FooterStyles = styled.div`
    border-top: var(--borderWidth, 5px) solid var(--lightGreen, lightGreen);
    height: var(--footerHeight, 100px);
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    position: fixed;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--lightGreen, lightGreen);
`


export default function Footer() {
    return(
        <FooterStyles>
            {/* TODO some bs quote, site links lol */}
            <p>
                Alfie Freeman 2023
            </p>
        </FooterStyles>
    )
}