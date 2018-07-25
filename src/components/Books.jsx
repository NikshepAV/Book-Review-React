import React, {Component} from 'react';
import Book from './Book';

class Books extends Component {
    state = {
        books: [
            {id: 1, source: 'https://images.gr-assets.com/books/1432468943l/70535.jpg'},
            {id: 2, source: 'https://images.gr-assets.com/books/1511288482l/11084145.jpg'},
            {id: 3, source: 'https://images.gr-assets.com/books/1428219118l/10907.jpg'},
            {id: 4, source: 'https://images.gr-assets.com/books/1500472519l/13605031.jpg'},
            {id: 5, source: 'https://images.gr-assets.com/books/1474171184l/136251.jpg'},
            {id: 6, source: 'https://images.gr-assets.com/books/1372039943l/387190.jpg'},
            {id: 7, source: 'https://images.gr-assets.com/books/1409666208l/23150337.jpg'},
            {id: 8, source: 'https://images.gr-assets.com/books/1392791656l/4921.jpg'},
        ]
    };

    render() {
        return (
            <div className="row">
                {this.state.books.map(book =>
                    <Book key={book.id}
                          book={book}
                    />
                )}
            </div>
        );
    }
}

export default Books;