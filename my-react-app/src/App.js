import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginIntro from "./pages/LoginIntro";
import Counter from "./pages/Counter";
import Record from "./pages/Record";
import Home from "./pages/Home"; // Home 컴포넌트가 없으면 제거 가능

import "./index.css"; // 전역 스타일 포함

function App() {
  return (
    <div className="App">
      {/* 🌟 커스텀 헤더 */}
      <header className="header">
        <nav className="header-nav">
          <Link to="/" className="nav-item">홈</Link>
          <Link to="/record" className="nav-item">일기</Link>
          <Link to="/counter" className="nav-item">캐릭터</Link>
          <Link to="/login" className="nav-item">로그인</Link>
          <Link to="/signup" className="nav-item">회원가입</Link>
        </nav>
      </header>

      {/* 페이지 라우팅 */}
      <Routes>
        <Route path="/" element={<LoginIntro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/record" element={<Record />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> {/* 필요 시 */}
      </Routes>
    </div>
  );
}

export default App;
