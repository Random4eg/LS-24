import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import { About } from './pages/about/About';
import {Home} from './pages/home/Home';
import { Header } from './shared/components/Header/Header';
import { Footer } from './shared/components/Footer/Footer';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
      <Footer/>
  </React.StrictMode>
);
