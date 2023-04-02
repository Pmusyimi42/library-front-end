import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Review from './Review';

function ShowBook() {
  const [books, setBooks] = useState([]);
  const [myBook, setMyBook] = useState([]);
  const navigate = useNavigate

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`/books/${id}`);
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  function handleClick (id) {
    const book = books.find(book => book.id === id)
     
    if  (book) {
      navigate('/book')
    }else {
      alert ("Book not found")
    }
  }

  return (
    <div id="book">
      <Navbar />
      {
        books.map((book) => {
          return (
            <div key={book.id} id="bookCard" className="card p-5" onClick={handleClick}>
            <div id="viewBook" className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row">
                <div className="col-md-5">
                  <img id="img" src={book.cover} className="img-fluid rounded-start" alt="..." />
                  <div id="cardDetail" className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Title: {book.title}</h4>
                      <p className="card-text">Author: {book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      <Review />
    </div>
  );
}

export default ShowBook