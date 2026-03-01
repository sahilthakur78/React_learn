import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import layout from './layout.jsx'
import Home from './components/home/home.jsx'

const router=createBrowserRouter([
  {
 path:'/',
 
 children:[
  {
    path:"",
    element:<Home/>
  },
  {
    path:"about",

  }
]

}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
