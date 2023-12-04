import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import cartProductsLoader from './loaders/cartProductLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'manage_inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'log_in',
        element: <Login></Login>
      },
      {
        path: 'order_review',
        element: <OrderReview></OrderReview>
      }
    ]
  },
  {
    path:'*',
    element: <h1>404</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
