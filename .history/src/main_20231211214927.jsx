import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/auth/login.jsx'
import Demo from './pages/quiz/demo/demo.jsx'
import Error from './Error.jsx'

import Hero from './pages/landing/hero';
import Objective from './pages/landing/objective';
import Languages from './pages/landing/languages';
import Features from './pages/landing/features';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />, 
    errorElement: <Error />,
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
