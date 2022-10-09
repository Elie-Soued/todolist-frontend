import React from "react";
import Main from "./Components/Main/Main";
import LoginPage from "./Components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/todos" element={<Main />} />
      </Routes>
    </Router>
  );
}
