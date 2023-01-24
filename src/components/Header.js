import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 3rem;
  z-index: 2;
  margin-left: 2rem;
  position: relative;
  a {
    color: var(--black, black);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: var(--borderWidth, 5px) solid var(--lightGreen, lightGreen);
    padding: 1rem;
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
