import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import CVDownload from './shared/CVDownload';
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
    @font-face {
        font-family: 'tender';
        src: url('/tender.otf') format("opentype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'mytype';
        src: url('/mytype.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'actors';
        src: url('/actors.ttf') format("truetype");
        font-weight: normal;
        font-style: normal;
    }

   /* setup variables */
   html {
      --fontHeading: 'tender', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      --fontBody: 'tender', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      --red: #ff0000;
      --black: #393939;
      --grey: #3A3A3A;
      --gray: var(--grey);
      --lightGrey: #e1e1e1;
      --lightGray: var(--lightGrey);
      --offWhite: #ededed;
      --lightGreen: #d6efc7;
      --darkGreen: #194e48;
      --middleGreen: #98ba7d;
      --maxWidth: 1400px;
      --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
      --footerHeight: 50px;
      --borderWidth: 2px;
      --inputHeight: 80px;
      --spacing: 20px; // used for all generic passing and margin etc.
      --headerHeight: 120px;
      /* --boxShadowSection: rgba(145,106,112,0.2) 0 6px 24px; */
      --boxShadowSection: rgba(214,239,199,0.3) 0 6px 24px;
      box-sizing: border-box;
      font-size: 62.5%; // set defalt font size to 10px.
      height: 100%;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    p {
      margin: var(--spacing) 0;
    }

    h1, h2, h3 {
      font-family: var(--fontHeading);
      text-transform: uppercase;
      font-size: 32px;
    }

    body {
        font-family: var(--fontBody);
        padding: 0;
        padding-top: 120px; // the header.
        margin: 0;
        margin-bottom: var(--footerHeight, 100px);
        font-size: 18px;
        line-height: 1;
        min-height: 100%;
        background: linear-gradient(170deg, var(--lightGreen) 0%, var(--middleGreen) 50%, var(--darkGreen) 100%); 
        background: var(--darkGreen);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;

        text-align: center; // default text align should be center for now.
        color: var(--lightGreen); // same with default text color, lightGreen. Specify if other in code.
    }

    a {
        text-decoration: none;
        color: var(--lightGreen);
    }

    a:hover, a:focus, a:active {
        text-decoration: underline;
        color: var(--darkGreen);
    }

    button {
        font-family: var(--fontHeading)
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
      {/* <CVDownload />  TODO, temporarily disabled 13/2/23 AF. Will turn into an email CTA once email setup. */}
      <Footer />
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
