import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(reduxThunk));
export default ({ children }) => <Provider store={store}>{children}</Provider>;

