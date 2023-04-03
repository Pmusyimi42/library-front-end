import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer/Footer';

export default function Card() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

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

  function handleClick(id) {
    console.log(id);
    navigate(`/books/${id}`);
  }

  return (
    <div className='card-container'>
      {books.map((book) => (
        <div
          className='cards'
          style={{ width: '18rem' }}
          key={book.id}
          onClick={() => handleClick(book.id)}
        >
          <img src={book.cover} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title' style={{ fontWeight: 'bold' }}>
              {book.name}
            </h5>
            <span>Written by: {book.author.name}</span>
          </div>
          <Link to={`/books/${book.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
