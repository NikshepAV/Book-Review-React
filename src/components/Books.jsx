import React from 'react';
import Book from './Book';

function Books(props) {
  return (
    <div className="row">
      {props.books.map(book =>
        <Book key={book.id}
              book={book}/>
      )}
    </div>
  );
}

export default Books;