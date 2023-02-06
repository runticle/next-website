import Link from "next/link";
import styled from "styled-components";

const CVStyle = styled.div`
    text-align: center;
    padding: var(--spacing) 0;

    a {
        text-decoration: underline;
        color: var(--lightGreen);
    }
`

export default function CVDownload() {
    return (
        <CVStyle>
            <Link href="/AlfieFreemanCV.pdf">Check out my CV here!</Link>
        </CVStyle>
    )
}