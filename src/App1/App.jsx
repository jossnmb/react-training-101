import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';
import Bookkeeper from './Bookkeeper';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bookkeeper />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index // Index routes are the default child route for a parent route.
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
