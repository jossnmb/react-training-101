import { useEffect, useState } from 'react';

export default function App() {
  const [buttonClasses, setButtonClasses] = useState('');
  const [buttonTxt, setButtonTxt] = useState('...');
  const [walletAddress, setWalletAddress] = useState('');
  const [loggedIn, isLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum && !loggedIn) {
      setButtonClasses('bg-purple-500 text-white');
      setButtonTxt('Log in');
    } else if (typeof window.ethereum) {
      setButtonClasses('bg-purple-700 text-white cursor-not-allowed');
      setButtonTxt('Logged in');
    } else {
      setButtonClasses('bg-gray-500 text-gray-100 cursor-not-allowed');
      setButtonTxt('MetaMask is not installed');
    }
  });

  const toggleButton = () => {
    loginWithMataMask();
  };

  function handleAccountsChanged(accounts) {
    setWalletAddress('');
    isLoggedIn(false);
  }

  ethereum.on('accountsChanged', handleAccountsChanged);

  async function loginWithMataMask() {
    if (!loggedIn) {
      const accounts = await ethereum
        .request({ method: 'eth_requestAccounts' })
        .catch((e) => {
          console.error(e.message);
        });
      if (!accounts) return;
      setWalletAddress(accounts[0]);
      isLoggedIn(true);
    }
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex-col space-y-2 justify-center items-center text-center">
        <button
          id="loginButton"
          className={`rounded-md p-2 font-bold ${buttonClasses}`}
          onClick={toggleButton}
        >
          {buttonTxt}
        </button>
        <div>{walletAddress}</div>
      </div>
    </div>
  );
}
