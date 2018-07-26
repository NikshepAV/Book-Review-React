import React, {Component} from 'react';
import Book from './Book';

class Books extends Component {

    render() {
        return (
            <div className="row">
                {this.props.books.map(book =>
                    <Book key={book.id}
                          book={book}/>
                )}
            </div>
        );
    }
}

export default Books;