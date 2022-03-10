import FormInput from '../App3/components/FormInput';
import { useRef } from 'react';
import './app.css';

export default function App() {
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent unwanted page refresh
    console.log(usernameRef);
  };

  return (
    <div className="formApp">
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Type Something" />
        <button>Submit</button>
      </form>
    </div>
  );
}
