import { useState } from "react";

function useForm(initialValue) {
  const [inputs, setInputs] = useState(initialValue);
  console.log(inputs);
  
  function handleInputChange(e) {
    let {value, type, name} = e.target;
    if (type === 'number'){
      value = +value;
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
    setInputs({})
  }

  return [inputs, handleInputChange, resetForm, clearForm];
}

export default useForm;