import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [defocused, setDefocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleDefocus = (e) => {
    setDefocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleDefocus}
        onFocus={() =>
          inputProps.name === 'confirmPassword' && setDefocused(true)
        }
        defocused={defocused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
