import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Book extends Component {
    render() {
        const showBookLink = "/books/" + this.props.book.id;
        return (
            <div className="col-md-3">
                <Link to={showBookLink}>
                    <img className="book"
                         src={this.props.book.image}
                         alt=""
                         height="350"
                         width="250"/>
                </Link>
            </div>
        );
    }
}

export default Book;