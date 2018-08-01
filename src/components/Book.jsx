import React from 'react';
import {Link} from 'react-router-dom';

function Book(props) {
  const showBookLink = "/books/" + props.book.id;
  return (
    <div className="col-md-3">
      <Link to={showBookLink}>
        <img className="book"
             src={props.book.image}
             alt=""
             height="350"
             width="250"/>
      </Link>
    </div>
  );
}

export default Book;