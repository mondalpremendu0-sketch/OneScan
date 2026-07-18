import React from 'react'
import  {RouterProvider} from "react-router"

import {router} from './app.routes.jsx'
import './index.css'





export default function App() {
  
  return (
  <RouterProvider router={router}/>
  )
}

