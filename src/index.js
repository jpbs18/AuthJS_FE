import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/auth/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import StateProvider from "./redux/store";


ReactDOM.render(
  <StateProvider>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
      </App>
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
