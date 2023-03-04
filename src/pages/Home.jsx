import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div>
        <h3 className="main-header">Click the button to get start</h3>
            <button className='button'>
                <Link to={`/create`}>Start</Link>
            </button>
    </div>
  )
}

export default Home