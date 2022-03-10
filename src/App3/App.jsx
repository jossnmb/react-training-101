import FormInput from '../App3/components/FormInput';

import './app.css';

export default function App() {
  const usernameRef = useRef();

  return (
    <div className="formApp">
      <form>
        <FormInput refer={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Type Something" />
      </form>
    </div>
  );
}
