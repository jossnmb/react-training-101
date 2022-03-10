import './formInput.css';

const FormInput = (props) => {
  const { placeholder } = props;

  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
