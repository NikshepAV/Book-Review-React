import React from 'react';
import {Link} from 'react-router-dom';

function NavBarDropDownMenu(props) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"
         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {props.name}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.children}
      </div>
    </li>
  );
}

function NavBar(props) {
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
              <a className="dropdown-item">
                Digital
              </a>
              <a className="dropdown-item">
                Hard Copy
              </a>
              <a className="dropdown-item">
                Kindle
              </a>
            </NavBarDropDownMenu>
            {props.isLoggedIn &&
            <li className="nav-item">
              <Link className="nav-link"
                    to="/books/new">
                Add Book
              </Link>
            </li>
            }
          </ul>

          <ul className="navbar-nav ml-auto">
            {props.isLoggedIn ? (
              <NavBarDropDownMenu
                name={<img className="rounded-circle"
                           src={props.loggedInUser.image}
                           alt=""
                           height="25px"
                           width="25px"/>}>
                <Link className="dropdown-item"
                      to="/users/0">
                  Account
                </Link>
                <a className="dropdown-item"
                   onClick={props.changeUserIsLoggedIn}>
                  Log Out
                </a>
              </NavBarDropDownMenu>
            ) : (
              <React.Fragment>
                <li className="nav-item">
                  <a className="nav-link"
                     href="#"
                     onClick={props.changeUserIsLoggedIn}>
                    <div id="signInWithGoogle">
                      <span className="icon"></span>
                      <span>Sign In with Google</span>
                    </div>
                  </a>
                </li>
              </React.Fragment>
            )}
          </ul>

        </div>

      </div>
    </nav>
  );
}

export default NavBar;