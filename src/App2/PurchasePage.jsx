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
        {loading ? (
          <img src={dogImg} width="450" height="300" />
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  );
}
