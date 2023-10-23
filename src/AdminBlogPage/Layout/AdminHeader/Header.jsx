import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router DOM
import './Header.scss';

export default function Header() {
  return (
    <div className="custom-header"> {/* Use a different class name */}
      <div className="container">
        <div className="custom-logo"> {/* Use a different class name */}
          <span style={{ color: '#fff' }}>Blog Admin Panel</span>
        </div>
        <nav className="custom-left-nav"> {/* Use a different class name */}
          <ul className="custom-nav-links"> {/* Use a different class name */}
            <li>
              <NavLink to="/" exact className="custom-nav-link" activeClassName="custom-active"> {/* Use a different class name */}
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog-web" className="custom-nav-link" activeClassName="custom-active"> {/* Use a different class name */}
                BlogWeb
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-user" className="custom-nav-link" activeClassName="custom-active"> {/* Use a different class name */}
                Add User
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-blog" className="custom-nav-link" activeClassName="custom-active"> {/* Use a different class name */}
                Add Blog
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
}

