import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/auth/login.jsx'
import Hero from './pages/landing/hero';
import Demo from './pages/quiz/demo/demo.jsx'
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
  {
    path: "/demo",
    element: <Demo />, 
    errorElement: <Error />,
  },
  {
    path: "/hero",
    element: <Hero />, 
    errorElement: <Error />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
