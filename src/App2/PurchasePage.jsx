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
  	const [loadedSrc, setLoadedSrc] = React.useState(null);
  	React.useEffect(() => {
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
                setLoading(true);
            };
        }
    }, [props.src]);
  	if (loadedSrc === props.src) {
        return (
            <img {...props} />
        );
    }
  	return null;
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
          { loading } ? (
            <AsyncImage src={dogImg} onLoad={} />
          ) : (
            <h3>Loading</h3>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
