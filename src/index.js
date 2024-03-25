import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './global.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basket from './Basket/Basket';
import { Layout } from './Layout/Layout';
import { PageNotFound } from './PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/basket",
        element: <Basket/>
      },
      {
        path: "/*",
        element: <PageNotFound/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);