import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Record from "./pages/Record";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Signup from "./pages/Signup";

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
                <Link to="/counter">Counter</Link> |{" "}
                <Link to="/record">Record</Link> |{" "}
                <Link to="/signup">Signup</Link> |{" "}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/record" element={<Record />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
