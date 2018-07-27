import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Books from './Books';
import NewBook from './NewBook';
import Profile from './Profile';

class App extends Component {
    state = {
        category: [
            {value: 'All Books'},
            {value: 'Digital'},
            {value: 'Hard Copy'},
            {value: 'Kindle'},
        ],
        books: [
            {id: 1, source: 'https://images.gr-assets.com/books/1432468943l/70535.jpg'},
            {id: 2, source: 'https://images.gr-assets.com/books/1511288482l/11084145.jpg'},
            {id: 3, source: 'https://images.gr-assets.com/books/1428219118l/10907.jpg'},
            {id: 4, source: 'https://images.gr-assets.com/books/1500472519l/13605031.jpg'},
            {id: 5, source: 'https://images.gr-assets.com/books/1474171184l/136251.jpg'},
            {id: 6, source: 'https://images.gr-assets.com/books/1372039943l/387190.jpg'},
            {id: 7, source: 'https://images.gr-assets.com/books/1409666208l/23150337.jpg'},
            {id: 8, source: 'https://images.gr-assets.com/books/1392791656l/4921.jpg'},
        ],
        users: [
            {
                id: 1,
                name: 'Nikshep A V',
                email: 'nikshep@mavenhive.in',
                image: 'https://www.feedbackhall.com/uploads/user-icon.png'
            }
        ],
        isLoggedIn: false
    };

    changeUserIsLoggedIn = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    handleAddNewBook = newBookImage => {
        const books = [...this.state.books];
        books.push({
            id: this.state.books.count + 1,
            source: newBookImage
        });
        this.setState({books: books});
    };

    render() {
        return (

            <Router>
                <React.Fragment>
                    <NavBar loggedInUser={this.state.users[0]}
                            isLoggedIn={this.state.isLoggedIn}
                            changeUserIsLoggedIn={this.changeUserIsLoggedIn}/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/"
                                   render={() => {
                                       return (
                                           <React.Fragment>
                                               <h1>
                                                   {this.state.category[2].value}:
                                               </h1>
                                               <Books books={this.state.books}/>
                                           </React.Fragment>
                                       );
                                   }}/>
                            <Route path="/books/new"
                                   render={() => {
                                       return <NewBook handleAddNewBook={this.handleAddNewBook}/>;
                                   }}/>
                            <Route path="/users/:id" render={() => {
                                return (
                                    <Profile profileUser={this.state.users[0]}/>
                                );
                            }}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>

        );
    }
}

export default App;