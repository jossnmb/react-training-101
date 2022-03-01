import { useCallback, useEffect } from 'react';
import axios from 'axios';

export default function Loader({
  dogImg,
  setDogImg,
  loading,
  setLoading,
  clicked,
  setClicked,
}) {
  async function DogLoader(retryCnt, max) {
    setClicked(true);
    if (retryCnt >= max) throw new Error(`Failed retrying ${retryCnt} times`);
    let dogUrl;
    setLoading(false);
    await axios
      .get('https://random.dog/woof')
      // if resolved
      .then((res) => {
        // no mp4s allowed as img
        if (res.data.includes('mp4')) {
          console.log('reloading image!');
          retryCnt++;
          DogLoader(retryCnt, max);
        } else {
          console.log('loaded image success!');
        }
        dogUrl = 'https://random.dog/' + res.data;
        setDogImg(dogUrl);
        
      })
      .catch((e) => {
        console.log(e);
      });
    // .then(() => {
    //   console.log(dogUrl);
    // });
  }

  let clickHandler = useCallback(() => {
    setClicked(false);
    DogLoader(0, 8);
    console.log('dog img: ' + dogImg);
  }, [dogImg, loading, clicked]);

  return (
    <div>
      <button onClick={clickHandler}>Purchase Item</button>
    </div>
  );
}
