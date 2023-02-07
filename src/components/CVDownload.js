import Link from "next/link";
import styled from "styled-components";

const CVStyle = styled.div`
    background:var(--darkGreen);

    --buttonSize: 70px;

    position: sticky;
    bottom: calc(var(--spacing) + var(--footerHeight));
    left: var(--spacing);
    width: var(--buttonSize);
    height: var(--buttonSize);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    box-shadow: 2px 2px 5px #333;

    z-index: 9999; //above it all

    a {
        /* text-decoration: underline; */
        color: var(--lightGreen);
    }
`

export default function CVDownload() {
    return (
        <CVStyle>
            <Link href="/AlfieFreemanCV.pdf" target="_blank">My CV</Link>
        </CVStyle>
    )
}