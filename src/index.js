import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes, Route } from "react-router-dom";
import './index.css';
import Page from './pages/page';
import Home from './pages/home/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
