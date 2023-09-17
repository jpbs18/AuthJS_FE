import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../redux/actions";

class Signup extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = formProps => this.props.signup(formProps, () => this.props.history.push("/feature"));

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="email"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ errorMessage: auth.errorMessage });

export default compose(
  connect(mapStateToProps, actions), 
  reduxForm({ form: "signup" })
)(Signup);
