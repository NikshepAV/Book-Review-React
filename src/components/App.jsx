import React, {Component} from 'react';
import NavBar from './NavBar';
import Books from './Books';

class App extends Component {
    state = {
        category: 'All Books'
    };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <h1>
                        {this.state.category}:
                    </h1>
                </div>
                <Books/>
            </React.Fragment>
        );
    }
}

export default App;