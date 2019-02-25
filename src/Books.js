import React from 'react';
import Book from './Book';

const Books = ({books}) => {
  return (
    <div>
      {books && books.length > 0 ? books.map((b, i) => (
          <Book book={b} key={i} myKey={i}/>
        )): (
        <div>
          <h2 className='no_books'>:-( </h2>
          <h2 className='no_books'>Nothing Here Yet - Try Searching For A Book</h2>
        </div>
        )}
    </div>
  );
};

export default Books;