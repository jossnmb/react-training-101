// import { useEffect, useState } from 'react';
import axios from 'axios';

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
//     // return data.then(res);
//   } catch (e) {
//     console.log(e);
//   }
// }

export default async function DogLoader(retryCnt, max) {
  try {
    const data = await axios.get('https://random.dog/woof');
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.log(e);
  }
}

