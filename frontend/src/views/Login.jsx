import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// asset || template
import AuthTemplate from "../Templates/Authtemplate";
import AuthInput from "../Templates/AuthInputBox";
import Button from "../Templates/Button";
import RedirectLink from "../Templates/RedirectLink";

// axios instance
import { instance } from "../api/instance.js";

// utilities
import {
  handleChange,
  stateLengthVerifier,
} from "../utilities/stateHandler.js";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  // destructure the state
  const { username, password } = formData;

  useEffect(() => {
    //dynamically set the error to null after 3seconds whenever an error has occured
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);
  const navigate = useNavigate();

  // pass the handlechange to a new function to pass the state handle built in react to reduce the argument
  const handleOnChange = (name, val) => {
    handleChange(setFormData, formData, name, val);
  };

  // submit the form
  const handleSubmit = async () => {
    try {
      if (!stateLengthVerifier(username, 4)) {
        setError("Username too short, must be 4 characters and above");
        return;
      }
      if (!stateLengthVerifier(password, 8)) {
        setError("Password too short, must be 8 characters and above");
        return;
      }
      const response = await instance.post("/auth/login", {
        username,
        password,
      });

      if (response.data) {
        navigate("/main");
      }
    } catch (error) {
      // Handle errors from the server here
      console.log(error);
      if (error.response) {
        // The server responded with a non-2xx status code
        setError(error.response.data.message);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("Request Error:", error.request);
        setError("An error occurred during request, try reloading the page");
      } else {
        // Something else happened
        console.error("Error:", error.message);
        setError("Something went wrong, try reloading the page");
      }
    }
  };

  return (
    <AuthTemplate page={"SIGN-IN"} error={error}>
      <AuthInput
        placeholder={"Username"}
        handleOnChange={(e) => handleOnChange("username", e.target.value)}
        value={username}
      />
      <AuthInput
        placeholder={"Password"}
        type="password"
        handleOnChange={(e) => handleOnChange("password", e.target.value)}
        value={password}
      />
      <Button submit={handleSubmit} />
      <RedirectLink text={"Create account"} path={"/"} />
    </AuthTemplate>
  );
};

export default Login;
