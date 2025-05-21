import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecordDiary.css";

// 📁 이미지 아이콘 import
import ChevronLeft from "../assets/images/chevron-left0.svg";
import HomeIcon from "../assets/images/home0.svg";
import MicIcon from "../assets/images/group-70.svg";
import CalendarIcon from "../assets/images/group-90.svg";
import WriteIcon from "../assets/images/write.png"; // ✅ 일지 작성 아이콘

const RecordDiary = () => {
  const navigate = useNavigate();
  const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");

  return (
    <div className="diary-page">
      {/* 🔙 상단 네비게이션 바 */}
      <div className="top-bar">
        <img
          src={ChevronLeft}
          alt="뒤로가기"
          className="nav-icon"
          onClick={() => navigate(-1)}
        />
        <img
          src={HomeIcon}
          alt="홈으로"
          className="nav-icon"
          onClick={() => navigate("/")}
        />
      </div>

      {/* 📜 일기 리스트 영역 */}
      <div className="diary-list">
        {diaries.length === 0 ? (
          <p className="empty-message">작성된 일기가 없습니다.</p>
        ) : (
          diaries.map((diary) => (
            <div
              className="diary-card"
              key={diary.id}
              onClick={() => navigate(`/record/${diary.id}`)}
            >
              <div className="diary-date">{diary.createdAt}</div>
              <div className="diary-title">{diary.title}</div>
              <div className="diary-content">{diary.content}</div>
            </div>
          ))
        )}
      </div>

      {/* 🧠 일기 생성 버튼 (AI 일기 생성용) */}
      <button
        className="add-diary-btn"
        onClick={() => alert("AI 일기 자동 생성 기능 예정입니다.")}
      >
        일기 만들기
      </button>

      {/* ⬇️ 하단 버튼들 (일지 작성 / 음성 / 캘린더) */}
      <div className="bottom-icons">
        {/* ✏️ 일지 작성 버튼 → RecordEdit.js로 이동 */}
        <img
          src={WriteIcon}
          alt="일지 작성"
          className="fab-button"
          onClick={() => navigate("/record/new")}
        />

        {/* 🎤 음성 입력 */}
        <img
          src={MicIcon}
          alt="음성 입력"
          className="fab-button"
          onClick={() => alert("음성 입력 기능 예정")}
        />

        {/* 📅 달력 기능 */}
        <img
          src={CalendarIcon}
          alt="달력"
          className="fab-button"
          onClick={() => alert("달력 기능 예정")}
        />
      </div>
    </div>
  );
};

export default RecordDiary;
