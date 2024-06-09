import React from 'react'
import AppRouter from './utils/AppRouter'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter(AppRouter)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
