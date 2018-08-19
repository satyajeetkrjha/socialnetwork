import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileAction';
 class Navbar extends Component{
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();// caling action
  }

    render(){
      console.log('inside navbar');
      const {user,isAuthenticated}=this.props.auth;
      console.log('this.props.auth.isAuthenticated is',this.props.auth.isAuthenticated);
      console.log('isAuthenticated is',isAuthenticated);
      const authLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
         
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
      
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
          <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
             Logout
          </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
         <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
        return(
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              DevConnector
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
  
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {' '}
                    Developers
                  </Link>
                </li>
              </ul>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>

        );
    }
}
const mapStateToProps =(state) =>({
  auth:state.auth
});
export default connect(mapStateToProps,{logoutUser,clearCurrentProfile})(Navbar);