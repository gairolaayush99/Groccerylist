import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({ setIsLogin }) {
    const logoutsubmit = () => {
        localStorage.clear()
        setIsLogin(false)
        
    }
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">View Market List</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Add new Item</Link>
        </li>
              <li onClick={ logoutsubmit}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </header>
  );
}
