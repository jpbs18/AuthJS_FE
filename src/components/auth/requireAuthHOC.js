import React, { Component } from "react";
import { connect } from "react-redux";


export default ChildComponent => {
  class ComposedComponent extends Component {
    shouldNavigateAway = () => {
      if (!this.props.authenticated) {
        this.props.history.push("/");
      }
    };

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated});
  return connect(mapStateToProps)(ComposedComponent);
};
