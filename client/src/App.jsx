import React from 'react'
import Signin from './components/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Home</div>
     },
     {
      path: '/signin',
      element: <Signin/>
     },
  ])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App