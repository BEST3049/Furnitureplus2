import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homef from './component/homef';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homef />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
