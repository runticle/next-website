import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

export const Logo = styled.h1`
  z-index: 2;
  position: relative;

  a {
    color: var(--lightGreen);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
  }
`;

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 120px;
  box-sizing: border-box;
  z-index: 9999;
  background: var(--darkGreen);

  .bar {
    border-bottom: var(--borderWidth, 5px) solid var(--lightGreen, lightGreen);
    padding: var(--spacing);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Alfie Freeman</Link>
        </Logo>
        <Nav />
      </div>
    </HeaderStyles>
  );
}
