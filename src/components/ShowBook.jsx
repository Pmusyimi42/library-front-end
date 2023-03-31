import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import Review from './Review'

function ShowBook() {
  const [books, setBooks] = useState([])
  useEffect((
    fetch('http://127.0.0.1:3000/book')
    .then ((response)=>response.json())
    .then ((data)=>(setBooks(data))
     )
  ),[]) 

  return (
    <div id="book">
       <Navbar/>
      {books.map((book)=>
       {return(
     
    <div id="bookCard" className="card p-5">
      <div id="viewBook" className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row">
          <div className="col-md-5">
            <img
              id="img"
              src={book.cover}
              className="img-fluid rounded-start"
              alt="..."
            />
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
          )})} 
          
           <Review/>
       
        </div>
          
          
          
)
}

export default ShowBook