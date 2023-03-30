import React from 'react'
import Navbar from './Navbar'

function ShowBooks1() {
  return (
  <div className='col '>
    <Navbar/>
  <div className="card mb-3 w-75 p-3"  >
  <div className="row align-items-start">
    <div className="col text align-center">
      <img src="https://textbookcentre.com/media/products/Scan_20200103_9.jpg" className="h-100 lg:w-65 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt="Book Cover"/>
    </div>
    <div className="col">
      <div className="card-body">
        <h5 className="card-title">Book Title</h5>
        <p className="card-text">Book Description</p>
        <p className='card-author'><small>Author</small></p>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="review" type="text" placeholder="Give your review"/>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">

              Submit
            </button>
            <div className='col'>
             <h1 className='text-3xl f0nt-bold mb-2 py-4'>Reviews</h1> 
             <div className="card text-dark bg-light mb-3" style={{maxWidth: "18rem;"}}>
                <div className="card-header">Username</div>
                <div className="card-body">
                  {/* <h5 className="card-title">Light card title</h5> */}
                  <p className="card-text">User review.</p>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
                   Update
                  </button>
                  <br/>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Delete
                  </button>
                </div>
            </div>
           </div>
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

export default ShowBooks1