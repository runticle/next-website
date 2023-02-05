import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'textured';
        src: url('/Cymbria-Textured.otf') format("opentype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'regular';
        src: url('/Cymbria-Regular.otf') format("opentype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'rounded';
        src: url('/Cymbria-Rounded.otf') format("opentype");
        font-weight: normal;
        font-style: normal;
    }

   /* setup variables */
   html {
      --red: #ff0000;
      --black: #393939;
      --grey: #3A3A3A;
      --gray: var(--grey);
      --lightGrey: #e1e1e1;
      --lightGray: var(--lightGrey);
      --offWhite: #ededed;
      --lightGreen: #8bbb93;
      --darkGreen: #26402a;
      --maxWidth: 1400px;
      --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
      --footerHeight: 50px;
      --borderWidth: 5px;
      --inputHeight: 80px;
      --spacing: 20px; // used for all generic passing and margin etc.
      box-sizing: border-box;
      font-size: 62.5%; // set defalt font size to 10px.
      height: 100%;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'rounded', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        margin-bottom: var(--footerHeight, 100px);
        font-size:1.5rem;
        line-height: 2;
        height: 100vh;
        background: linear-gradient(140deg, var(--lightGreen) 0%, var(--darkGreen) 100%); 
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'rounded', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: var(--spacing);
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
