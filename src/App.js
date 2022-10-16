import React from "react";
import Main from "./Components/Main/Main";
import LoginPage from "./Components/LoginPage/LoginPage";
import { Route, Routes, HashRouter } from "react-router-dom";

export default function App() {
  const token = localStorage.getItem("token");
  console.log("token :>> ", token);

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/todos" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}
