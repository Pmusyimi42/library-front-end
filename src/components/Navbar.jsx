import React from 'react'
import {CgProfile} from 'react-icons/cg'


export default function Navbar() {


 function handleDelete() {
   fetch('http://127.0.0.1:3000/login', {
     method: 'DELETE'
   })
 }
 return (
   <div>
     <nav>
       <div class="nav__container">
           <a href="/home"><h4>WORDLINE</h4></a>
           <ul class="nav__menu">
               <li><a href="/home">Home</a></li>
               {/* <li><a href="/add">Addbook</a></li> */}
               <li><a href="/about">About</a></li>
               <li onClick={handleDelete}><a className='btn btn-primary'>LogOut</a></li>
               {/* <li><a href='/signup' className='btn btn-primary'>Signup</a></li> */}
               {/* <li><a href="#" style={{fontSize: "2rem"}}>
                 <img src="https://qph.cf2.quoracdn.net/main-qimg-f32f85d21d59a5540948c3bfbce52e68-lq" alt="" />
               </a></li> */}
           </ul>
           {/* <button id="open-menu-btn"><i class="uil uil-bars"></i></button> */}
           {/* <button id="close-menu-btn"><i class="uil uil-multiply"></i></button> */}
       </div>
     </nav>
   </div>
 )
}