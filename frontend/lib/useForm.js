import { useEffect, useState } from "react";

function useForm(initialValue = {}) {
  const [inputs, setInputs] = useState(initialValue);
  const initialValues = Object.values(initialValue).join('');

  useEffect(() => {
    setInputs(initialValue);
  }, [initialValues])
  
  function handleInputChange(e) {
    let {value, type, name} = e.target;
    if (type === 'number'){
      value = +value;
    }
    if (type === 'file'){
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initialValue)
  }

  function clearForm() {
    setInputs(Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ''])));
  }

  return {inputs, handleInputChange, resetForm, clearForm};
}

export default useForm;