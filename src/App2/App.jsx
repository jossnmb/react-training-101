import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PurchasePage from '../App2/PurchasePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchasePage />} />
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
