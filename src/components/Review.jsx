import React from 'react'
import { useState, useEffect } from 'react';

function Review() {
  const [review, setReview] = useState("");

  useEffect(() => {
    fetch(
      'http://127.0.0.1:3000/reviews'
    )
      .then((r) => r.json())
      .then((data) => {
        // {setReview(review)} 
        setReview
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  fetch(
    `http://127.0.0.1:3000/reviews/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => review(data)
      
      // document.location.reload();
    )
    .catch((error) => {
      console.error(error);
    });
  }
  return (
    <div className='col'>
               <h1 className='text-3xl f0nt-bold mb-2 py-4'>Reviews</h1> 
               <div className="card text-dark bg-light mb-3" style={{maxWidth: "18rem;"}}>
                  <div className="card-header">Username</div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Light card title</h5> */}
                    <p className="card-text">User review.</p>
                    <input
                      className="form-control"
                      name="review"
                      value={review}
                      placeholder="Type Here"
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " onClick={handleSubmit}>
                     Update
                    </button>
                    <br/>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </button>
                  </div>
              </div>
             </div>
  )
}

export default Review