import React from 'react'
import { Link } from 'react-router-dom'

const ul = {
    display: "flex",
    listStyle: "none"
}

const li = {
    padding: "10px"
}

const Navbar = () => {
  return (
    <nav>
        <ul style={ul}>
            <li style={li}><Link to={`/create`}>Create</Link></li>
            <li style={li}><Link to={`/read`}>Read</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar