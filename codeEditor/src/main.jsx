import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PerformanceScreen from './screens/PerformanceScreen.jsx'
import TestScreen from './screens/TestScreen.jsx'

const router = createBrowserRouter ([
  {path: "/", element: <App />},
  {path:"/test", element: <TestScreen />},
  {path: "/result", element: <PerformanceScreen />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
