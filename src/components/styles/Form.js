import styled, { keyframes } from 'styled-components';

const Form = styled.form`
  border: 5px solid var(--lightGreen, lightgreen);
  padding: 20px;
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
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
    border: 2px solid var(--lightGreen, lightgreen);

    &:focus {
      outline: 0;
      border-color: var(--darkGreen, darkGreen);
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    background: var(--lightGreen, lightGreen);
    border: 0;
    font-size: 2rem;
    padding: 0.5rem 1.2rem;
  }
  fieldset{
    border: 0;
  }
`;

export default Form;
