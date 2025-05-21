import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecordEdit.css";
import ChevronLeft from "../assets/images/chevron-left0.svg";

const RecordEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diary, setDiary] = useState(null);

  // 📥 일기 불러오기
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("diaries") || "[]");
    if (id) {
      const target = data.find((d) => d.id === Number(id));
      if (target) setDiary(target);
    } else {
      // ✅ 새 일지 작성 모드
      const now = new Date();
      const newEntry = {
        id: now.getTime(),
        title: "",
        content: "",
        createdAt: now.toLocaleString(),
      };
      setDiary(newEntry);
    }
  }, [id]);

  // ✏️ 제목 + 내용 수정
  const handleChange = (e) => {
    setDiary({ ...diary, [e.target.name]: e.target.value });
  };

  // 💾 저장
  const handleSave = () => {
    const list = JSON.parse(localStorage.getItem("diaries") || "[]");

    const exists = list.some((d) => d.id === diary.id);
    const updated = exists
      ? list.map((d) => (d.id === diary.id ? diary : d))
      : [...list, diary];

    localStorage.setItem("diaries", JSON.stringify(updated));
    navigate("/record");
  };

  // 🗑️ 삭제
  const handleDelete = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    const list = JSON.parse(localStorage.getItem("diaries") || "[]");
    const updated = list.filter((d) => d.id !== Number(id));
    localStorage.setItem("diaries", JSON.stringify(updated));
    navigate("/record");
  };

  if (!diary) return <div className="record-edit">로딩 중...</div>;

  return (
    <div className="record-edit">
      {/* 🔙 뒤로가기 */}
      <div className="record-edit-header">
        <img
          src={ChevronLeft}
          alt="뒤로가기"
          className="back-icon"
          onClick={() => navigate(-1)}
        />
      </div>

      {/* 📄 일기 카드 */}
      <div className="record-edit-card">
        <div className="edit-date">{diary.createdAt}</div>

        {/* ✅ 제목 입력 필드 */}
        <input
          type="text"
          name="title"
          value={diary.title}
          onChange={handleChange}
          className="edit-title-input"
          placeholder="제목을 입력하세요"
        />

        {/* ✅ 내용 입력 */}
        <textarea
          name="content"
          value={diary.content}
          onChange={handleChange}
          rows={10}
          placeholder="내용을 입력하세요"
        />

        {/* 💾 저장 + 🗑️ 삭제 버튼 */}
        <div className="edit-button-group">
          <button className="save-btn" onClick={handleSave}>
            저장하기
          </button>
          {id && (
            <button className="delete-btn" onClick={handleDelete}>
              삭제하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordEdit;
