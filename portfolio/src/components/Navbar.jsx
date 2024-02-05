import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const NavBar = () => {
    // state allows to manage the responsiveness of the navigation toggle
  const [nav, setNav] = useState(false);
// function which manages toggle button when clicked on
  const handleClick = () => setNav(!nav);

  return (
    // Uses bootstrap style to form toggle navigation button 
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid ">
        <button
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects-gallery" end>
                Projects Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" end>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
