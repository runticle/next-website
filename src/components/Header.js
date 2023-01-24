import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 3rem;
  z-index: 2;
  margin-left: calc(var(--spacing) * 2);
  position: relative;
  a {
    color: var(--black, black);
    text-decoration: none;
    text-transform: uppercase;
    padding: calc(var(--spacing) / 2) var(--spacing);
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: var(--borderWidth, 5px) solid var(--lightGreen, lightGreen);
    padding: var(--spacing);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Alfie Freeman</Link>
        </Logo>
        <Nav/>
      </div>
    </HeaderStyles>
  );
}
