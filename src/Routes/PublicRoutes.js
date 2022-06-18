import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "../Pages/LoginPage";

export const PublicRoutes = () => {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
      </Router>
    );
}