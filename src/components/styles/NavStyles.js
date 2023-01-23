import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  font-family: 'regular', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    background: none;

    height: 100%;
    width: 50%;
    border-radius: 80% 0; // leaf shape

    cursor: pointer;

    &:hover,
    &:focus {
      background: var(--lightGreen, lightGreen);
      outline: none;
      text-decoration:none;
    }
  }
`;

export default NavStyles;
