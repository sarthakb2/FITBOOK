import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'

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