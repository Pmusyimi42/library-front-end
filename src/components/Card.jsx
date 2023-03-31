import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('http://127.0.0.1:3000/books');
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className='card-container'>
      {books.map((book) => (
        <div className="cards" style={{ width: '18rem' }} key={book.id}>
          <img src={book.cover} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight: "bold"}}>{book.name}</h5>
            <span>Written by:{book.author.name}</span>
            {/* <p className="card-text">{book.description}</p> */}
          </div>
          <Link to="/book">Read more</Link>
        </div>
      ))}
    </div>
  );
}
