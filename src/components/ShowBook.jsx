import React from 'react';

function ShowBook(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="row">
          <img className="book-show"
               src={props.book.image}
               alt=""/>
          {props.isLoggedIn &&
          <div className="row pt-4">
            <div className="col-md-11">
              <div className="links btn-group">
                <button className="btn btn-custom">
                  Edit
                </button>
                <button className="btn btn-custom">
                  Delete
                </button>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
      <div className="col-md-8">
        <div className="book-info">
          <h2 className="book-title">
            {props.book.title}
          </h2>
          <h3 className="book-author">
            By <span>{props.book.author}</span>
          </h3>
          <hr/>
          <p className="book-desc">
            {props.book.description}
          </p>
        </div>
        <div className="reviews">
          <h1>Reviews</h1>
          <h6>No reviews yet</h6>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default ShowBook;