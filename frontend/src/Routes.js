import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

const RoutesContainer = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}
const Home = () => {
    return (
        <h1>home page</h1>
    )
}
export default RoutesContainer;