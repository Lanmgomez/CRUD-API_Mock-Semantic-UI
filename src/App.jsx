import './App.css'
import { Outlet } from "react-router-dom"
import Navbar from './menu/Navbar'

function App() {
  return (
      <div className="main">
        <Navbar />
        <h2 className="main-header">React Crud Operations</h2>
        <Outlet />
      </div>
  )
}

export default App
