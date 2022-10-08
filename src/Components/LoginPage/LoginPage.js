import React, { useState } from "react";
import "../NewTaskForm/styles.css";
import "./style.css";
import "../TodoTask/styles.css";
import { doRequest, URLRegister, URLLogin } from "../../ServiceUtils.js";
import { useNavigate } from "react-router-dom";

import {
  userNameErrorMsg,
  userNamePattern,
  passwordErrorMsg,
  passwordPattern,
} from "../../Validation.js";

export default function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [submitButton, setSubmitButton] = useState("Login");
  let navigate = useNavigate();

  const registerOrLogin = async () => {
    if (submitButton === "Login") {
      const response = await doRequest("post", URLLogin, {
        username,
        password,
      });
      const token = response?.data.accessToken;
      localStorage.setItem("token", token);
      navigate("/todos");
    } else {
      await doRequest("post", URLRegister, {
        username,
        password,
      });
    }
  };

  const toggleButton = () => {
    if (submitButton === "Login") {
      setSubmitButton("Register");
    } else {
      setSubmitButton("Login");
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
            <input
              className="inputLogin"
              value={password}
              type="text"
              maxlength="40"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

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
              className="inputLogin"
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
