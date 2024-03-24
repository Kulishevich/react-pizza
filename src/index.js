import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './global.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basket from './Basket/Basket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/basket",
    element: <Basket/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);