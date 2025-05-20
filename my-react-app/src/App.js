import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Record from "./pages/Record";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Signup from "./pages/Signup";
import LoginIntro from "./pages/LoginIntro";

function App() {
    return (
        <div className="App">
            <nav>
                <Link to="/">홈</Link> | <Link to="/login">로그인</Link> |{" "}
                <Link to="/counter">카운터</Link> |{" "}
                <Link to="/record">일기</Link> | <Link to="/signup">회원가입</Link>
            </nav>
            <Routes>
                <Route path="/" element={<LoginIntro />} />        {/* 인트로 페이지 */}
                <Route path="/home" element={<Home />} />          {/* 홈은 /home 으로 변경 */}
                <Route path="/login" element={<Login />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/record" element={<Record />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
