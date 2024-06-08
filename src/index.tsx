import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './Home';
import './global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './Layout/Layout';
import {store} from './redux/store'
import { Provider } from 'react-redux'

const PizzaElemPage = lazy(() => import('./PizzaElemPage/PizzaElemPage'))
const Basket = lazy(() => import('./Basket/Basket'))
const PageNotFound = lazy(() => import('./PageNotFound/PageNotFound'))

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
        element: 
        <Suspense fallback={<div>Loading...</div>}>
          <Basket/>
        </Suspense>
      },
      {
        path: "/pizza/:id",
        element:         
        <Suspense fallback={<div>Loading...</div>}>
          <PizzaElemPage/>
        </Suspense>,
      },
      {
        path: "/*",
        element:
        <Suspense fallback={<div>Loading...</div>}>
          <PageNotFound/>
        </Suspense>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);