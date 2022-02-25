import { Component, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DogLoader from './routes/loader';

export default function PurchasePage() {
  let navigate = useNavigate();

  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   dogLoader(0, 3);
  // }, []);

  let clickHandler = () => {};

  return (
    <div>
      <button
        onClick={async () => {
          let doggy = await DogLoader(0, 3);
          // setDogImg(dogImage);
          console.log(doggy);
          // console.log(setDogImg(DogLoader(0, 3)));
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
