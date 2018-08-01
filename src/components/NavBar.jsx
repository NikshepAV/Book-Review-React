import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const NavItem = props => {
    return (
        <li className="nav-item">
            <a className="nav-link"
               href={props.path}
               onClick={props.onClick}>
                {props.name}
            </a>
        </li>
    );
};


class NavBarDropDownMenu extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        );
    }
}

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Book Review</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">
                            <NavBarDropDownMenu name="Categories">
                                <a className="dropdown-item" href="">Digital</a>
                                <a className="dropdown-item" href="">Hard Copy</a>
                                <a className="dropdown-item" href="">Kindle</a>
                            </NavBarDropDownMenu>
                            {this.props.isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link"
                                      to="/books/new">
                                    Add Book
                                </Link>
                            </li>
                            }
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            {this.props.isLoggedIn ? (
                                <NavBarDropDownMenu
                                    name={<img className="rounded-circle"
                                               src={this.props.loggedInUser.image}
                                               alt=""
                                               height="25px"
                                               width="25px"/>}>
                                    <Link class="dropdown-item"
                                          to="/users/1">
                                        Account
                                    </Link>
                                    <a className="dropdown-item"
                                       href="#"
                                       onClick={this.props.changeUserIsLoggedIn}>
                                        Log Out
                                    </a>
                                </NavBarDropDownMenu>
                            ) : (
                                <React.Fragment>
                                    <NavItem name="Log In"
                                             path="#"
                                             onClick={this.props.changeUserIsLoggedIn}/>
                                    <NavItem name="Sign Up"
                                             path="#"
                                             onClick={this.props.changeUserIsLoggedIn}/>
                                </React.Fragment>
                            )}
                        </ul>

                    </div>

                </div>
            </nav>
        );
    }
}

export default NavBar;