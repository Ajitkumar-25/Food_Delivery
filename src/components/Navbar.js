import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-2 fst-italic" to="/">Foodi-Duniya</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="nav-link active fs-4" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active fs-4" to="/login">Login</Link>
      </li>
     
     
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
