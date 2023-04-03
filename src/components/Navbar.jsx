import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem('user_id'); // check if user is logged in
  console.log(isLoggedIn);

  const handleLogout = () => {
    sessionStorage.removeItem('user_id');
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
            {isLoggedIn && ( // render Home link only if user is logged in
              <li>
                <a href="/home">Home</a>
              </li>
            )}
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <button className="btn btn-primary" onClick={handleLogout}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
