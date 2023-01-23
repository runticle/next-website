import Link from 'next/link';
import styled from 'styled-components';

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
    border-bottom: 5px solid var(--black, black);
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
      </div>
    </HeaderStyles>
  );
}
