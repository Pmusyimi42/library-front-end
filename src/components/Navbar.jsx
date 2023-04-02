
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

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
            <li>
              <a href="/home">Home</a>
            </li>
            {/* <li><a href="/add">Addbook</a></li> */}
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <button className="btn btn-primary" onClick={handleLogout}>
                LogOut
              </button>
            </li>
            {/* <li><a href='/signup' className='btn btn-primary'>Signup</a></li> */}
            {/* <li><a href="#" style={{fontSize: "2rem"}}>
              <img src="https://qph.cf2.quoracdn.net/main-qimg-f32f85d21d59a5540948c3bfbce52e68-lq" alt="" />
            </a></li> */}
          </ul>
          {/* <button id="open-menu-btn"><i className="uil uil-bars"></i></button> */}
          {/* <button id="close-menu-btn"><i className="uil uil-multiply"></i></button> */}
        </div>
      </nav>
    </div>
  );
}