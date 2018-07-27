import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Books from './Books';
import NewBook from './NewBook';
import Profile from './Profile';
import ShowBook from './ShowBook';

class App extends Component {
    state = {
        category: [
            {value: 'All Books'},
            {value: 'Digital'},
            {value: 'Hard Copy'},
            {value: 'Kindle'},
        ],
        books: [
            {
                id: 0,
                title: '2001: A Space Odyssey',
                author: 'Arthur C. Clark',
                description: 'A sufficiently long enough description for the book in question.',
                image: 'https://images.gr-assets.com/books/1432468943l/70535.jpg'
            },
            {
                id: 1,
                title: 'Steve Jobs',
                author: 'Walter Isaacson',
                description: 'A sufficiently long enough description for the book in question.',
                image: 'https://images.gr-assets.com/books/1511288482l/11084145.jpg'
            }
            // {id: 3, image: 'https://images.gr-assets.com/books/1428219118l/10907.jpg'},
            // {id: 4, image: 'https://images.gr-assets.com/books/1500472519l/13605031.jpg'},
            // {id: 5, image: 'https://images.gr-assets.com/books/1474171184l/136251.jpg'},
            // {id: 6, image: 'https://images.gr-assets.com/books/1372039943l/387190.jpg'},
            // {id: 7, image: 'https://images.gr-assets.com/books/1409666208l/23150337.jpg'},
            // {id: 8, image: 'https://images.gr-assets.com/books/1392791656l/4921.jpg'},
        ],
        users: [
            {
                id: 0,
                name: 'Nikshep A V',
                email: 'nikshep@mavenhive.in',
                image: 'https://avatars2.githubusercontent.com/u/18426392?s=460&v=4'
            }
        ],
        isLoggedIn: false
    };

    changeUserIsLoggedIn = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    handleAddNewBook = newBook => {
        const books = [...this.state.books];
        const book = {
            id: this.state.books.length,
            title: newBook.title,
            author: newBook.author,
            description: newBook.description,
            image: newBook.image
        };
        books.push(book);
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
                                               <h1 className="current-category">
                                                   {this.state.category[0].value}:
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
                            <Route path="/books/:id"
                                   render={() => {
                                       return <ShowBook book={this.state.books[0]}
                                                        isLoggedIn={this.state.isLoggedIn}/>;
                                   }}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>

        );
    }
}

export default App;