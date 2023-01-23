import { useState } from 'react';

export default function useForm(initial = {}) {
  // create state object for inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;

    // always parse numbers
    if (type === 'number') value = parseInt(value, 10);

    // for file uploads, not needed right now
    // if (type === 'file') [value] = e.target.files;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );

    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
