
import React, { useState, useEffect } from 'react';

function Review() {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:3000/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [])

  function handleSubmit(e, id) {
    e.preventDefault();
    const reviewToUpdate = reviews.find(review => review.id === id)
    fetch(`http://127.0.0.1:3000/reviews/${id}`, {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        comment: reviewToUpdate.comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }

  return (
    <>
    {
        reviews.map((review) => {
            return (
                <div className='col' key={review.id}>
                <h1 className='text-3xl font-bold mb-2 py-4'>Reviews</h1> 
                <div className="card text-dark bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">{review.user.username}</div>
                <div className="card-body">
                    <p className="card-text">{review.comment}</p>
                    <input
                    className="form-control"
                    name="review"
                    value={review.comment}
                    placeholder="Type Here"
                    onChange={(e) => {
                      const newReviews = [...reviews]
                      const index = newReviews.findIndex(x => x.id === review.id)
                      newReviews[index].comment = e.target.value
                      setReviews(newReviews)
                    }}
                    />
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " onClick={(e) => handleSubmit(e, review.id)}>
                    Update
                    </button>
                    <br />
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Delete
                    </button>
                </div>
                </div>
            </div>
        )
        })
      }
    </>

  )
}

export default Review;

