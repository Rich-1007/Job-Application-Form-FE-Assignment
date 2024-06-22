import { useState } from "react";
import { validateEvent } from "../../helpers/ValidateEvent";

const useForm = () => {
  const [errors, setErrors] = useState(null);
  const handleSubmit = (data) => {
    console.log("data: ",data);
    const errors = validateEvent(data);
    console.log(errors);
    setErrors(errors);
  };

  return {
    errors,
    handleSubmit,
  };
};

export default useForm;
