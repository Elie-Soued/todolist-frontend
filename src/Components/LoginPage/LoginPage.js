import React, { useState } from "react";
import "../NewTaskForm/styles.css";
import "./style.css";
import "../TodoTask/styles.css";
import { doRequest, URLRegister, URLLogin } from "../../ServiceUtils.js";
import { useNavigate } from "react-router-dom";
import eye from "../../img/eye-solid.svg";

import {
  userNameErrorMsg,
  userNamePattern,
  passwordErrorMsg,
  passwordPattern,
} from "../../Validation.js";

export default function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [passwordType, setPasswordType] = useState("password");
  let [submitButton, setSubmitButton] = useState("Login");
  let navigate = useNavigate();

  const login = async () => {
    const response = await doRequest("post", URLLogin, {
      username,
      password,
    });
    setTokenAndNavigate(response);
  };

  const registerOrLogin = async () => {
    if (submitButton === "Login") {
      login();
    } else {
      await doRequest("post", URLRegister, {
        username,
        password,
      });
      login();
    }
  };

  const toggleButton = () => {
    if (submitButton === "Login") {
      setSubmitButton("Register");
    } else {
      setSubmitButton("Login");
    }
  };

  const setTokenAndNavigate = (response) => {
    const token = response?.data.accessToken;
    localStorage.setItem("token", token);
    navigate("/todos");
  };

  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      console.log(passwordType);
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="main ">
        <h1>
          <span>My</span>
          <span>todo</span>
          <span>LIST</span>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!userNamePattern.test(username)) {
              alert(userNameErrorMsg);
            } else if (!passwordPattern.test(password)) {
              alert(passwordErrorMsg);
            } else {
              setUsername("");
              setPassword("");
              registerOrLogin();
            }
          }}
        >
          <div className="container">
            <input
              className="inputLogin"
              value={username}
              type="text"
              maxlength="40"
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <div className="relative">
              <input
                className="inputLogin relative"
                value={password}
                type={passwordType}
                maxlength="40"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <img
                className="showPassword absolute"
                onClick={() => {
                  togglePasswordType();
                }}
                src={eye}
                alt="SVG"
              />
            </div>

            <h4 className="forgotPasswordContainer">
              <span>
                <a
                  className="forgotPassword"
                  href="https://fontawesome.com/license"
                >
                  Forgot password?
                </a>{" "}
              </span>
            </h4>
            <button
              disabled={username === "" || password === ""}
              className={`inputLogin ${
                submitButton === "Register" ? "registerButton" : ""
              }`}
              type="submit"
            >
              {submitButton}
            </button>
          </div>
        </form>

        <div className="createAccountContainer">
          <h3>
            <span>Not registered yet ? </span>
          </h3>
          <h3>
            <span>
              {" "}
              <h3
                className="createAccount"
                onClick={() => {
                  toggleButton();
                }}
              >
                Create an account
              </h3>{" "}
            </span>
          </h3>
        </div>
        <i className="license">
          icons by fontawesome -{" "}
          <a href="https://fontawesome.com/license">license</a>
        </i>
      </div>
    </>
  );
}
