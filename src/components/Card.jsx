import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  const [books, setBooks] = useState([])
  useEffect((
    fetch('http://127.0.0.1:3000/books')
    .then ((response)=>response.json())
    .then ((data)=>(setBooks(data))
     )
  ),[]) 
  
  return (
    <div>
        {books.map((book)=>{
          return (
            <div className="card" style={{width: "18rem"}}>
        <img src={book.cover} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <small>{book.author.name}</small>
            <p className="card-text">{book.description}</p>
            <Link to= "/book">Read more</Link>
         </div>
</div>
          )
        })}
    </div>
  )
}
