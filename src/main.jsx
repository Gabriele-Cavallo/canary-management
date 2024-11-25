import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CanaryList from './pages/CanaryList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/canary-list',
        element: <CanaryList />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
