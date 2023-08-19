import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Mern</div>
      <ul className="nav-links">
        <Link to="/">
        <li>Create Post</li>
        </Link>
        <Link to="/all">
        <li>All Post</li>
        </Link>
       
      </ul>
    </nav>
  )
}

export default Navbar