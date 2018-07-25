import React, {Component} from 'react';

class Books extends Component {
    state = {
        books : [
            {id: 1, source: ''}
        ]
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <a href="/">

                    </a>
                </div>
            </div>
        );
    }
}

export default Books;