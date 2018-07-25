import React, {Component} from 'react';

const NavItem = props => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.path}>
                {props.name}
            </a>
        </li>
    );
}

class NavDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    toggleDropDown = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"
                   href="/" id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false"
                   onClick={this.toggleDropDown}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu}
                     aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">Book Review</a>
                        <button className="navbar-toggler" type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto">
                                <NavDropDown name="Categories">
                                    <a className="dropdown-item" href="/">
                                        Digital
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Hard Copy
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Kindle
                                    </a>
                                </NavDropDown>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <NavItem
                                    path="/"
                                    name="Log In"/>
                                <NavItem
                                    path="/"
                                    name="Sign Up"/>
                            </ul>

                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default NavBar;