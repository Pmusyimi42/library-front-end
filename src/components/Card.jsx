import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ShowBook from './ShowBook';

export default function Card() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('/books');
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className='card-container'>
      {books.map((book) => (
        <div className='cards' style={{ width: '18rem' }} key={book.id}>
          <img src={book.cover} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title' style={{ fontWeight: 'bold' }}>
              {book.name}
            </h5>
            <div className='span'>
              <span>Written by: {book.author.name}</span>
            </div>
            <Popup trigger={<button className="btn btn btn-info"> View Details </button>} modal nested>
            {close => (
              <div style={{backgroundColor: "aquamarine", padding: "5%", borderRadius: "20px", border: "solid"}}>
                  <div className="modal" style={{}}>
                      <button className="close" onClick={close}>
                          &times;
                      </button>
                  </div>
                  <div className="header" style={{
                    fontSize: "2em",
                    borderBottom: "1px solid white",
                    width: "60%",
                    }}>{book.title}</div>
                  <div className="content" style={{width: "60%",
                    padding: "10px 5px",
                    height: "30rem",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.5rem",
                  }}>{book.description}</div>
                  <div className="reviews">
                     <h2 style={{fontWeight: "bold"}}>Reviews</h2>
                  </div>
                  <div className="reviews" style={{fontSize: "2em", borderBottom: "1px solid white"}}>{book.reviews.comment}</div>
                  <div className="actions" style={{ margin: "auto", textAlign: "center"}}>
                  <button className="button" onClick={() => {close()}}>Close</button>
                  </div>
              </div>
            )}
            </Popup>
          </div>
        </div>
      ))}
    </div>
  );
}
