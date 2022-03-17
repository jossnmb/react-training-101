import { useState } from 'react';
import SketchTest from './components/SketchTest';

export default function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <SketchTest clicked={clicked} setClicked={setClicked} />
      <button className="rounded-md p-2 font-bold bg-lime-500 text-white m-2"
        onClick={() => {
          setClicked(true);
        }}
      >
        Mint NFT
      </button>
    </div>
  );
}
