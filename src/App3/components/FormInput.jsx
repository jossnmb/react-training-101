import './formInput.css';

const FormInput = (props) => {
  const { placeholder, refer } = props;

  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input ref={refer} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
