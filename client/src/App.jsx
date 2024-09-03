import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'

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
     {
      path: '/signup',
      element: <Signup/>
     },
  ])
  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App