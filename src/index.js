import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, HashRouter } from "react-router-dom";
import Page from './pages/page';
import Home from './pages/home/home';
import Form from './pages/form/form';
import Weather from './pages/weather/weather';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path='form' element={<Form />} />
          <Route path='weather' element={<Weather />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
