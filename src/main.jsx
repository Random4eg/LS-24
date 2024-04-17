import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Favorites } from './pages/favorites/Favorites';
import {Home} from './pages/home/Home';
import { ApiProvider } from './ApiProvider';
import { Cart } from './pages/cart/Cart';
import { Notification } from './pages/notification/notification';
import { Beans } from './pages/product/beans/Beans';
import { Coffee } from './pages/product/coffee/Coffee';
import { Login } from '/src/pages/auth/login/Login';


const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
         path:"Login",
          element: <Login/>,
    }, 
      {
        path: "Notification",
        element: <Notification />,
        
      },
         {
        path: "Favorites",
        element: <Favorites />,
        
      },
         {
        path: "Beans",
        element: <Beans />,
        
      },
         {
        path: "Coffee",
        element: <Coffee />,
        
      },
      {
        path: "Cart",
        element: <Cart />,
        
      },
      {
        path: "*",
        element: <Home />,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>      
      <RouterProvider router={router} />
  </React.StrictMode>
);

