import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import WelcomePage from './welcomepage/welcomepage';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />
    },
    {
      path: "/dashboard",
      element: <App />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
