import { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './loader';

export default function PurchasePage() {
  let navigate = useNavigate();
  // let loader = async (retryCnt, max) => await DogLoader(retryCnt, max);

  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(true);

  const setImgSrc = (imgUrl) => {
    setDogImg(imgUrl);
  };

  return (
    <div>
      <Loader
        dogImg={dogImg}
        onImgLoad={setImgSrc}
        loading={loading}
        setLoading={setLoading}
      />
      {/* {loading ? ( */}
      <img src={dogImg} width="150" height="100" />
      {/*  ) : ( // <h3>Loading</h3>
      )} */}
    </div>
  );
}
