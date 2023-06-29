import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home'
import ProductDetails from './components/home/ProductDetails'
import LikedProduct from './components/likeProducts/likedProduct'
import Login from './components/Login'
import SignUp from './components/signup'
import ErrorPage from './ErrorPage'
import Footer from './Footer'
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
        path: "/likes",
        element: <LikedProduct />
      },
      {
        path: "/footer",
        element: <Footer />
      },
      {
        path: "/product_details/:productId",
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
