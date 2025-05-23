import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// 📄 각 페이지 import
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginIntro from "./pages/LoginIntro";      // 앱 진입 첫 화면
import Counter from "./pages/Counter";
import Home from "./pages/Home";                  // 필요 없다면 삭제 가능
import RecordEdit from "./pages/RecordEdit";      // ✅ 일기 수정 페이지
import RecordDiary from "./pages/RecordDiary";    // ✅ 일기 프리뷰 리스트 (디자인 홈)
import "./index.css"; // 글로벌 스타일
import CalendarPage from "./pages/CalendarPage"; // 22.05 새로 만든 캘린더 컴포넌트 추가
import RecordSummary from "./pages/RecordSummary"; // 23.05 추가된 일기 요약 페이지

function App() {
  return (
    <div className="App">
      {/* 🌟 공통 헤더 (상단 네비게이션 바) */}
      <header className="header">
        <nav className="header-nav">
          {/* 📌 상단 탭 네비게이션 - 각 Route로 연결됨 */}
          <Link to="/" className="nav-item">홈</Link>
          <Link to="/record" className="nav-item">일기</Link>
          <Link to="/counter" className="nav-item">캐릭터</Link>
          <Link to="/login" className="nav-item">로그인</Link>
          <Link to="/signup" className="nav-item">회원가입</Link>
        </nav>
      </header>

      {/* 📍 Route 연결: 사용자가 접근할 수 있는 페이지들을 정의 */}
      <Routes>
        <Route path="/" element={<LoginIntro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/counter" element={<Counter />} />

        {/* 📄 일기 리스트 홈 */}
        <Route path="/record" element={<RecordDiary />} />

        {/* ✏️ 새 일지 생성 or 기존 수정 → 같은 페이지 재사용 */}
        <Route path="/record/new" element={<RecordEdit />} />
        <Route path="/record/:id" element={<RecordEdit />} />

        <Route path="/home" element={<Home />} />
        

        {/* 📅 캘린더 페이지 22.05 추가!! */}
        <Route path="/calendar" element={<CalendarPage />} /> {/* 🗓️ 새 페이지 라우팅 */}
        {/* 레코드 페이지 23.05 추가!! */}
        <Route path="/record-summary" element={<RecordSummary />} />
      
      </Routes>

    </div>
  );
}

export default App;
