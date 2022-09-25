import React, { useState } from "react";
import "../NewTaskForm/styles.css";
import "./style.css";
import "../TodoTask/styles.css";
import { doRequest, URLUsers } from "../../ServiceUtils.js";

export default function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [submitButton, setSubmitButton] = useState("Login");
  let [loginRegister, setLoginOrRegister] = useState("Login");

  const register = async () => {
    await doRequest("post", URLUsers, { username, password });
  };

  const createAccount = () => {
    setSubmitButton("Register");
    setLoginOrRegister("Register");
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
            const userNameErrorMsg =
              "Username should be between 5 to 15 characters and can only contain numeric digits, letters and white space";
            const passwordErrorMsg =
              "Password should be between 7 to 15 characters and contain at least one numeric digit and a special character";
            const userNamePattern = /^[a-zA-Z0-9/\s/ ]{5,15}$/;
            const passwordPattern =
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

            if (!userNamePattern.test(username)) {
              alert(userNameErrorMsg);
            } else if (!passwordPattern.test(password)) {
              alert(passwordErrorMsg);
            } else {
              setUsername("");
              setPassword("");
              register();
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
            <button className="inputLogin" type="submit">
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
                  createAccount();
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
