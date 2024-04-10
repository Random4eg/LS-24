import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { About } from './pages/about/About';
import {Home} from './pages/home/Home';
import { ApiProvider } from './ApiProvider';





const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "About",
        element: <About />,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>      
      <RouterProvider router={router} />
  </React.StrictMode>
);
