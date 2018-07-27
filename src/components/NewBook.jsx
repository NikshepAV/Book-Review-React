import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class NewBook extends Component {

    state = {
        newBookImage: "",
        fireRedirect: false
    };


    submitForm = e => {
        e.preventDefault();
        this.props.handleAddNewBook(this.state.newBookImage);
        this.setState({fireRedirect: true});
    };

    render() {
        const {fireRedirect} = this.state;
        const {newBookImage} = this.state;
        return (
            <React.Fragment>
                <div className="col-md-6 offset-md-3">
                    <div className="new-book-form">
                        <h1>New Book</h1>
                        <hr/>
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="bookImageSource">Book Image Source</label>
                                <input className="form-control"
                                       type="text"
                                       value={newBookImage}
                                       onChange={e => {
                                           this.setState({newBookImage: e.target.value})
                                       }}
                                       required
                                       id="bookImageSource"/>
                            </div>
                            <input className="btn-custom" type="submit"/>
                        </form>
                    </div>
                </div>
                {fireRedirect && (
                    <Redirect to="/"/>
                )}
            </React.Fragment>
        );
    }
}

export default NewBook;