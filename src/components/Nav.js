import Link from 'next/link';
import { useState } from 'react';

import styled from 'styled-components';
import { Logo } from './Header';

const Desktop = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 2rem;
  font-family: 'regular', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;

  @media screen and (max-width: 767px) {
      display: none;
  }

  a,
  button {
    padding: var(--spacing) var(--spacing);
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

const NavStyles = styled.div`
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
`

const Toggle = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: flex;
        align-self: center;
    }
`

const Mobile = styled.div`
    display: ${props => props.toggle ? "unset" : "none"};
    color: white;

    position: fixed; 
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    background: linear-gradient(15deg, var(--lightGreen) 0%, var(--middleGreen) 50%, var(--darkGreen) 100%);

    z-index: 2;

    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;

    @keyframes fadeInOpacity {
      0% { 
        opacity: 0;
        color: black;
      };
      
      100% { 
        opacity: 1; 
        color: white;
      }
    }

    .top-section {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: stretch;
      padding: var(--spacing);
      border-bottom: var(--borderWidth, 5px) solid var(--lightGreen, lightGreen);

      h1 {
        padding: 0;
        margin: 0;
        font-size: 3rem;
        margin: var(--spacing) 0;
      }
  
      p {
        margin: 0;
        margin-left: auto;
        align-self: center;
      }
    }
    

    a,
    button {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      position: relative;
      text-transform: uppercase;
      font-size: 1em;
      background: none;

      color: white;

      cursor: pointer;

      &:hover,
      &:focus,
      &:active {
        outline: none;
        text-decoration:none;
        background-color: var(--lightGreen);
      }
    }
`


export default function Nav() {

  // for mobile devices
  const [toggle, toggleMenu] = useState(false);

  const links = <>
    <Link onClick={() => toggleMenu(false)} href="/">Home</Link>
    <Link onClick={() => toggleMenu(false)} href="/stuff">Stuff</Link>
    <Link onClick={() => toggleMenu(false)} href="/photos">Photos</Link>
    <Link onClick={() => toggleMenu(false)} href="/contact">Contact</Link>
  </>

  return (
    <NavStyles>
      <Desktop>
        {links}
      </Desktop>
      <Toggle onClick={() => toggleMenu(!toggle)}>
        MENU
      </Toggle>
      <Mobile toggle={toggle}>
        <div className="top-section">
          <h1>
            Alfie Freeman
          </h1>
          <p onClick={() => toggleMenu(!toggle)}>
            Close
          </p>
        </div>
        {links}
      </Mobile>
    </NavStyles>
  );
}
