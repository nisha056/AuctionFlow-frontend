import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home'
import ProductDetails from './components/home/ProductDetails'
import LikedProduct from './components/likeProducts/LikedProduct'

import './index.css'
import ErrorPage from './pages/ErrorPage'
import Footer from './pages/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
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
        path: "/likes",
        element: <LikedProduct />
      },
      {
        path: "/footer",
        element: <Footer />
      },
      {
        path: "/products/details/:id",
        element: <ProductDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
