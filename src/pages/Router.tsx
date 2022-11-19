import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vic from './Vic';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Vic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
