import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    handleInputChange,
    handleResetForm,
  };
};
