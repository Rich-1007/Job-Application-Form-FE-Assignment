import { useState } from "react";
import { Validate } from "../helpers/Validate";

const useFormValidate = () => {
  const [errors, setErrors] = useState(null);
  const handleSubmit = (e, data) => {
    e.preventDefault();
    const errors = Validate(data);
    setErrors(errors);
  };

  return {
    errors,
    handleSubmit,
  };
};

export default useFormValidate;