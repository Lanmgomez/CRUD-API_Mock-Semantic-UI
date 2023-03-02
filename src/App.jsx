import './App.css'
import { Outlet } from "react-router-dom"

function App() {
  return (
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Outlet />
      </div>
  )
}

export default App
