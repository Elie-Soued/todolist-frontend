import React from "react";
import "../NewTaskForm/styles.css";
import "./style.css";
import "../TodoTask/styles.css";
export default function LoginPage() {
  return (
    <>
      <div className="main ">
        <h1>
          <span>My</span>
          <span>todo</span>
          <span>LIST</span>
        </h1>
        <form>
          <div className="pilou">
            <input
              className="pilou3"
              type="text"
              maxlength="40"
              placeholder="Enter username"
            />
            <input
              className="pilou3"
              type="text"
              maxlength="40"
              placeholder="Enter Password"
            />

            <h4 className="forgotPassword">
              <span>
                <a className="black" href="https://fontawesome.com/license">
                  Forgot password?
                </a>{" "}
              </span>
            </h4>
            <button className="pilou3" type="submit">
              Login
            </button>
          </div>
        </form>

        <div className="createAccount">
          <h3>
            <span>Not registered yet ? </span>
          </h3>
          <h3>
            <span>
              {" "}
              <a className="green" href="https://fontawesome.com/license">
                create an account
              </a>{" "}
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
