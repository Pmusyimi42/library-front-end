import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem('user_id');

  const handleLogout = () => {
    sessionStorage.removeItem('user_id');
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav>
        <div className="nav__container">
          <a href="/home">
            <h4>WORDLINE</h4>
          </a>
          <ul className="nav__menu">
            {isLoggedIn ? (
              <li>
                <a href="/home">Home</a>
              </li>
            ) : null}
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              {isLoggedIn ? (
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
