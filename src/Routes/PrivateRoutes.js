import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../Pages/HomePage";
import { Login } from "../Pages/LoginPage";

export const PrivateRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </Router>
    );
}