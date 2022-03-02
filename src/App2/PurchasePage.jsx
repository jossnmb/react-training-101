import { useEffect, useState } from 'react';
import Loader from './loader';

export default function PurchasePage() {
  const [clicked, setClicked] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [fullyLoaded, setFullyLoaded] = useState(false);

  const AsyncImage = (props) => {
    useEffect(() => {
      if (loadedSrc) {
        const handleLoad = () => {
          setFullyLoaded(true);
        };
        const image = new Image();
        image.addEventListener('load', handleLoad);
        image.src = loadedSrc;
        return () => {
          image.removeEventListener('load', handleLoad);
        };
      }
    }, [loadedSrc]);
    if (fullyLoaded) {
      return <img {...props} />;
    }
    return <h3>Loading</h3>;
  };

  return (
    <div>
      <Loader
        clicked={clicked}
        setClicked={setClicked}
        loadedSrc={loadedSrc}
        setLoadedSrc={setLoadedSrc}
        setFullyLoaded={setFullyLoaded}
      />
      <div>
        {/* only want to show loading once button is clicked         */}
        {clicked ? <AsyncImage src={loadedSrc} width="450" /> : <div></div>}
      </div>
    </div>
  );
}

// const AsyncImage = (props) => {
//   useEffect(() => {
//     if (props.src) {
//       const handleLoad = () => {
//         setFullyLoaded(true);
//       };
//       const image = new Image();
//       image.addEventListener('load', handleLoad);
//       image.src = props.src;
//       return () => {
//         image.removeEventListener('load', handleLoad);
//       };
//     }
//   }, [props.src]);
//   if (fullyLoaded) {
//     return <img {...props} />;
//   }
//   return <h3>Loading</h3>;
// };
