import React, { useState } from "react";
import "./Login.css"; // 동일한 CSS 파일을 활용합니다.

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        console.log(
            "Email:",
            email,
            "Username:",
            username,
            "Password:",
            password
        );
    };

    return (
        <div className="login-2">
            <div className="div">
                <div className="chevron-left">◀</div>
                <div className="home">🏠</div>
            </div>
            <div className="frame-12">
                <div className="div2">회원가입</div>
                <form className="frame-7" onSubmit={handleSubmit}>
                    <div className="text-field">
                        <label htmlFor="username" className="label">
                            활동명
                        </label>
                        <div className="input">
                            <input
                                type="text"
                                id="username"
                                className="value"
                                placeholder="사용자 이름 입력"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="text-field">
                        <label htmlFor="email" className="label">
                            이메일
                        </label>
                        <div className="input">
                            <input
                                type="email"
                                id="email"
                                className="value"
                                placeholder="이메일 입력"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="password-field">
                        <label htmlFor="password" className="label">
                            비밀번호
                        </label>
                        <div className="input">
                            <input
                                type="password"
                                id="password"
                                className="value"
                                placeholder="비밀번호 입력"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="password-field">
                        <label htmlFor="confirmPassword" className="label">
                            비밀번호 확인
                        </label>
                        <div className="input">
                            <input
                                type="password"
                                id="confirmPassword"
                                className="value"
                                placeholder="비밀번호 확인"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="button">
                        <span className="label2">회원가입</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
