import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div className="col-md-3">
                <a href="">
                    <img className="book" src={this.props.book.source} alt="" height="350" width="250"/>
                </a>
            </div>
        );
    }
}

export default Book;