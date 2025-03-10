import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signin from './Components/signin'
import Signup from './Components/signup'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Notfound from './Components/Notfound';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Notfound />
},
{
  path: '/Signin',
  element: <Signin />
},
{
  path: '/Signup',
  element: <Signup />
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
