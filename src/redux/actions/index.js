import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, redirectCallback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    localStorage.setItem("token", response.data.token);    
    dispatch({ type: AUTH_USER, payload: response.data.token });
    redirectCallback();
    
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Email already exists" });
  }
};


export const signin = (formProps, redirectCallback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );

    localStorage.setItem("token", response.data.token);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    redirectCallback();

  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};



export const signout = () => {
    localStorage.removeItem("token");
    return { type: AUTH_USER, payload: "" };
}
