import React from 'react';

const Book = ({book}) => {
  let authors = book.volumeInfo.authors || 'Not found';
  let thmb = null;
  if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail){
    thmb = book.volumeInfo.imageLinks.thumbnail;
  }

  return (
    <div className='book_wrapper'>
      <img className='book_thmb' src={thmb} alt={book.volumeInfo.title}/>
      <div className='book_content'>
        <h2 className='book_title'>{book.volumeInfo.title}</h2>
        <h3>
          <div>By: </div>
          <div>{authors}</div>
        </h3>
        <h3>
          <div>Published by: </div>
          <div>{book.volumeInfo.publisher || 'Unknown'}</div>
        </h3>
        <a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer"><button className='book_info_button'>See this Book</button></a>
      </div>
    </div>
  );
};

export default Book;