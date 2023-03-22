import { useEffect, useMemo, useRef, useState } from 'react';

export const useForm = (initialState = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [formValidationState, setFormValidationState] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formField of Object.keys(formValidationState)) {
      if (formValidationState[formField] !== '') return false;
    }
    return true;
  }, [formValidationState]);

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialState);
  };

  const createValidators = () => {
    const formCheckedValidations = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'This field is required'] =
        formValidations[formField];

      formCheckedValidations[`${formField}Valid`] = fn(formState[formField])
        ? ''
        : errorMessage;
    }

    // console.log(formCheckedValidations);
    setFormValidationState(formCheckedValidations);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    handleResetForm,
    ...formValidationState,
    isFormValid,
  };
};
