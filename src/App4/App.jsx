import { useState } from 'react';
import SketchTest from './components/SketchTest';

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <SketchTest clicked={clicked} setClicked={setClicked} />
      <button
        onClick={() => {
          setClicked(true);
        }}
      >
        Save Canvas
      </button>
    </div>
  );
}
