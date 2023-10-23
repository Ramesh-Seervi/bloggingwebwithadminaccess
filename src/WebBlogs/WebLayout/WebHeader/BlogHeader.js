import React from 'react';
import './BlogHeader.scss';
import { NavLink } from 'react-router-dom';

export default function BlogHeader() {
  return (
    <header className="blog-header">
      <div className="container">
        <div className="logo">
          <NavLink to="/web" >
            <span style={{ color: '#fff' }}>Blog From RPS</span>
          </NavLink>
        </div>
        <nav className="left-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/web" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-about" className="nav-link" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-contact" className="nav-link" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-feedback" className="nav-link" activeClassName="active">
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Visit Admin Panel
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
