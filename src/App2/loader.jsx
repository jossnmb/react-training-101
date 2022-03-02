import axios from 'axios';

export default function Loader({ setClicked, setLoadedSrc, setFullyLoaded }) {
  async function DogLoader(retryCnt, max) {
    setClicked(true);
    setLoadedSrc(null);
    setFullyLoaded(false);
    if (retryCnt >= max) throw new Error(`Failed retrying ${retryCnt} times`);
    let dogUrl;
    await axios
      .get('https://random.dog/woof')
      // if resolved
      .then((res) => {
        // no mp4s or webms allowed as img
        // if (res.data.includes('mp4')) {
        if (/mp4|webm/.test(res.data)) {
          console.log('reloading image!');
          retryCnt++;
          DogLoader(retryCnt, max);
        } else {
          console.log('loaded image success!');
        }
        dogUrl = 'https://random.dog/' + res.data;
        setLoadedSrc(dogUrl);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <button
        onClick={() => {
          DogLoader(0, 8);
        }}
      >
        Load Dog
      </button>
    </div>
  );
}
