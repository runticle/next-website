import styled, { keyframes } from 'styled-components';

const Form = styled.form`
  padding: var(--spacing);
  font-size: 1.5rem;
  line-height: 1.5;
  max-width: 1000px;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: var(--spacing);
    margin-top: var(--spacing);
    font-size: 2rem;
    line-height: 2rem;
    height: var(--inputHeight);
    border: 2px solid var(--lightGreen, lightgreen);

    &:focus {
      outline: 0;
      border-color: var(--darkGreen, darkGreen);
    }
  }
  textarea {
    height: calc(var(--inputHeight) * 2);
  }
  button,
  input[type='submit'] {
    width: 100%;
    height: var(--inputHeight);
    background: var(--lightGreen, lightGreen);
    border: 0;
    margin-top: var(--spacing);
    font-size: 2rem;
    /* padding: 0.5rem 1.2rem; */
  }
  fieldset{
    border: 0;
  }
`;

export default Form;
