import React, { useState } from 'react';

function Review({ review }) {
  const [comment, setComment] = useState(review.comment);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://library1-dv9h.onrender.com/reviews/${review.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: comment,
      }),
    })
      .then((response) => response.json())
      .then((updatedReview) => setComment(updatedReview.comment))
      .catch((error) => console.error(error));
  }

  function handleDelete() {
    fetch(`https://library1-dv9h.onrender.com/reviews/${review.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the review from the state
      })
      .catch((error) => console.error(error));
  }

  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        <h5>{review.user.username}</h5>
        <button
          className='btn btn-outline-danger btn-sm'
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <p>{comment}</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Edit comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </li>
  );
}

export default Review;
