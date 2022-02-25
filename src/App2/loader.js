// import { useEffect, useState } from 'react';
import axios from 'axios';

//this successfully runs on button press, but I have no idea how to return the dogUrl back to PurchasePage
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

export { DogLoader };

//old code attempts
//want to return dogImg after done loading
// export default function Loader() {
//   const [loaded, setLoaded] = useState(false);

//   const apiCall = async function DogLoader(retryCnt, max) {
//     if (retryCnt >= max) throw new Error(`Failed retrying ${retryCnt} times`);
//     try {
//       return await axios.get('https://random.dog/woof').then(
//         (res) => {
//           //if resolved
//           if (!res.data.includes('m')) {
//             console.log('loaded image success!');
//             const dogImg = 'https://random.dog/' + res.data;
//             // setLoaded(true);
//             return dogImg;
//           } else {
//             console.log('reloading image!');
//             retryCnt++;
//             DogLoader(retryCnt);
//           }
//         },
//         () => {
//           //if rejected
//           console.log('Garbage API call!');
//         }
//       );
//     } catch (e) {
//       console.log(e);
//     }
//   };
// }

// export default async function DogLoader(retryCnt, max) {
//   if (retryCnt >= max) throw new Error(`Failed retrying ${retryCnt} times`);
//   try {
//     const data = await axios.get('https://random.dog/woof').then(
//       (res) => {
//         //if resolved
//         if (!res.data.includes('m')) {
//           console.log('loaded image success!');
//           const dogImg = 'https://random.dog/' + res.data;
//           return dogImg;
//         } else {
//           console.log('reloading image!');
//           retryCnt++;
//           DogLoader(retryCnt);
//         }
//       },
//       () => {
//         //if rejected
//         console.log('Garbage API call!');
//       }
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }
