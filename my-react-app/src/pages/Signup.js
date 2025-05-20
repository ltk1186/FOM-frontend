import React, { useState } from "react";
import "./Signup.css"; // Login.css 대신 Signup 전용 스타일 사용

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (!agree) {
            alert("이용약관에 동의해주세요.");
            return;
        }
        console.log("회원가입 성공", { email, username, password });
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2 className="signup-title">계정 만들기</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username" className="signup-label">이름</label>
                    <input
                        type="text"
                        id="username"
                        className="signup-input"
                        placeholder="이름 입력"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="email" className="signup-label">이메일</label>
                    <input
                        type="email"
                        id="email"
                        className="signup-input"
                        placeholder="이메일 입력"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="signup-label">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        className="signup-input"
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword" className="signup-label">비밀번호 확인</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="signup-input"
                        placeholder="비밀번호 확인"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <label className="signup-agree">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        이용약관에 동의합니다.
                    </label>

                    <button type="submit" className="signup-button">가입하기</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
