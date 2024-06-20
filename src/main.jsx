import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Homepage from './components/Homepage/Homepage.jsx'
import Properties from './components/Properties/Properties.jsx'
import PropertyDetail from './components/Properties/PropertyDetail.jsx'
import PropertyForm from './components/Properties/PropertyForm.jsx'
import UpdatePropertyForm from './components/Properties/UpdatePropertyForm.jsx'
import PropertyDeleteConf from './components/Properties/PropertyDeleteConf.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: '/properties',
    element: <Properties />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
