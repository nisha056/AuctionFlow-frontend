import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import LikedProduct from './components/likedProduct'
import Login from './components/login'
import MyProduct from './components/myProduct'
import SignUp from './components/signup'
import ErrorPage from './ErrorPage'
import './index.css'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <SignUp />
      },
      {
        path: "/my_products",
        element: <MyProduct />
      },
      {
        path: "/likes",
        element: <LikedProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
