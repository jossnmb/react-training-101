import { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './loader';

export default function PurchasePage() {
  let navigate = useNavigate();
  // let loader = async (retryCnt, max) => await DogLoader(retryCnt, max);

  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const setImgSrc = (imgUrl) => {
    setDogImg(imgUrl);
    // console.log('setting img to ' + imgUrl);
  };

  const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = useState(null);
    useEffect(() => {
      setLoadedSrc(null);
      if (props.src) {
        const handleLoad = () => {
          setLoadedSrc(props.src);
        };
        const image = new Image();
        image.addEventListener('load', handleLoad);
        image.src = props.src;
        return () => {
          image.removeEventListener('load', handleLoad);
        };
      }
    }, [props.src, loading]);
    if (loadedSrc === props.src) {
      console.log('ready!');
      setLoading(true);
      return <img {...props} />;
    }
    return <h3>Loading</h3>;
  };

  return (
    <div>
      <Loader
        dogImg={dogImg}
        setDogImg={setImgSrc}
        loading={loading}
        setLoading={setLoading}
        clicked={clicked}
        setClicked={setClicked}
      />
      <div>
        {/* only want to show loading once button is clicked         */}
        {clicked ? (
          <AsyncImage src={dogImg} width="450" height="300" />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
