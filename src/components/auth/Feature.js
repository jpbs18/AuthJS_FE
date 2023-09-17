import React, { Component } from "react";
import requireAuth from "./requireAuthHOC";

class Feature extends Component {
  render() {
    return <div>You only see me because you're authenticated...</div>;
  }
}

export default requireAuth(Feature);
