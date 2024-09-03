import React from 'react'
import Signin from './components/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing/>
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