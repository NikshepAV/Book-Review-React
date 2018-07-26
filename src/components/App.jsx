import React, {Component} from 'react';
import NavBar from './NavBar';
import Books from './Books';

class App extends Component {
    state = {
        category: [
            {id: 1, value: 'All Books'},
            {id: 2, value: 'Digital'},
            {id: 3, value: 'Hard Copy'},
            {id: 4, value: 'Kindle'},
        ],
        isLoggedIn: false
    };

    changeUserIsLoggedIn = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    render() {
        return (
            <React.Fragment>
                <NavBar isLoggedIn={this.state.isLoggedIn}
                        changeUserIsLoggedIn={this.changeUserIsLoggedIn}/>
                <div className="container">
                    <h1>
                        {this.state.category[2].value}:
                    </h1>
                    <Books/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;