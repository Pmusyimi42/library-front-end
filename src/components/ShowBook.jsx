import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Review from './Review';
import './showBook.css';

function ShowBook() {
  const [book, setBook] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://library1-dv9h.onrender.com/books/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <section className="book">
      <article className="book__container">
        <div className="book__cover">
          <img src={book.cover} alt="" />
        </div>
        <div className="book__details">
          <div className="book__title">
            <h1>{book.name}</h1>
            <p>{book.description}</p>
          </div>
          <div className="book__reviews">
            <h1>Reviews</h1>
            <ul className='list-group list-group-flush'>
              {book.reviews > 0 && book.reviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
    </>
  );
}

export default ShowBook;
