import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import Books from './Books';
import NewBook from './NewBook';
import Profile from './Profile';
import ShowBook from './ShowBook';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('/apis')
      .then(res => {
        this.setState({
          category: res.data.category,
          books: res.data.books,
          users: res.data.users,
          isLoggedIn: res.data.isLoggedIn
        });
      })
      .catch(err => console.log(err));
  }

  changeUserIsLoggedIn = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
    axios.post('/auth', {})
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err))
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
    axios.post('/book/new', {books})
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state) {
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
                <Route path="/books/:id"
                       render={(props) => {
                         return <ShowBook book={this.state.books[props.match.params.id]}
                                          isLoggedIn={this.state.isLoggedIn}/>;
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
    } else {
      return (
        <div className="row">
          <img className="mx-auto"
               src="/loading.gif"
               alt=""/>
        </div>
      );
    }
  }
}

export default App;