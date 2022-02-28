import { useCallback, useEffect } from 'react';
import axios from 'axios';
import PurchasePage from './PurchasePage';

export default function Loader({ onImgLoad }) {
  async function DogLoader(retryCnt, max) {
    if (retryCnt >= max) throw new Error(`Failed retrying ${retryCnt} times`);
    let dogUrl;
    await axios
      .get('https://random.dog/woof')
      // if resolved
      .then((res) => {
        // no mp4s allowed as img
        if (res.data.includes('mp4')) {
          console.log('reloading image!');
          retryCnt++;
          DogLoader(retryCnt);
        } else {
          console.log('loaded image success!');
        }
        dogUrl = 'https://random.dog/' + res.data;
      })
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        console.log(dogUrl);
        return dogUrl;
      });
  }

  let clickHandler = useCallback(() => {
    onImgLoad(DogLoader(0, 3));
  }, [onImgLoad]);

  return (
    <div>
      <button onClick={clickHandler}>Purchase Item</button>
    </div>
  );
}
