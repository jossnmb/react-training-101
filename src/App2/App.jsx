import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PurchasePage from '../App2/PurchasePage';
import Purchased from '../App2/PurchaseConfirmed';
import Loader from '../App2/routes/loader';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchasePage />}>
          <Route path="loader" element={<Loader />} />
        </Route>
        <Route path="PurchaseConfirmed" element={<Purchased />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
