import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
// routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// components
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      { path: "/", element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/read", element: <Read /> },
      { path: "/update", element: <Update />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)
