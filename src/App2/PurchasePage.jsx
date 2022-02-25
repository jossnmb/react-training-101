import { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DogLoader } from './loader';

export default function PurchasePage() {
  let navigate = useNavigate();
  let loader = async (retryCnt, max) => await DogLoader(retryCnt, max);

  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   dogLoader(0, 3);
  // }, []);

  let clickHandler = () => {};

  return (
    <div>
      <button
        onClick={() => {
          let doggy = loader(0, 3);
          console.log(doggy);
          //trigger loader until setDogImg is returned
        }}
      >
        Purchase Item
      </button>

      {loading ? (
        <img src={dogImg} width="150" height="100" />
      ) : (
        <h3>Loading</h3>
      )}
      <Outlet />
    </div>
  );
}
