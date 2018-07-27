import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class NewBook extends Component {

    state = {
        title: '',
        author: '',
        description: '',
        image: '',
        fireRedirect: false
    };


    submitForm = e => {
        e.preventDefault();
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            image: this.state.image
        }
        this.props.handleAddNewBook(newBook);
        this.setState({fireRedirect: true});
    };

    render() {
        const {fireRedirect} = this.state;
        const {title, author, description, image} = this.state;
        return (
            <React.Fragment>
                <div className="col-md-6 offset-md-3">
                    <div className="new-book-form">
                        <h1>New Book</h1>
                        <hr/>

                        <form onSubmit={this.submitForm}>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input className="form-control"
                                       type="text"
                                       value={title}
                                       onChange={e => {
                                           this.setState({title: e.target.value})
                                       }}
                                       required
                                       id="title"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input className="form-control"
                                       type="text"
                                       value={author}
                                       onChange={e => {
                                           this.setState({author: e.target.value})
                                       }}
                                       required
                                       id="author"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control"
                                          id="description"
                                          required
                                          onChange={e => {
                                              this.setState({description: e.target.value})
                                          }}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input className="form-control"
                                       type="text"
                                       value={image}
                                       onChange={e => {
                                           this.setState({image: e.target.value})
                                       }}
                                       required
                                       id="image"/>
                            </div>
                            <input className="btn-custom2" type="submit" value="Create Book"/>

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