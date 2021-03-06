import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchUsers from './SearchUsers';
// import { logout } from '../store/actions/auth';

export default class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const curUser = this.props.currentUser.user.username;
    return (
      <nav>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <a href="/logout" onClick={this.logout}>
                Log out
              </a>
            </li>
            <li>
              <Link to={'/user/' + curUser}>{curUser}</Link>
            </li>
            <li>
              <SearchUsers />
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};
