import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css";

class Header extends Component {
  renderLinks = () => {
    if(this.props.authenticated){
      return (
        <div>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      );
    }

    return (
      <div>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });
export default connect(mapStateToProps)(Header);
