import React, { useState } from "react";
import "./Login.css";
import ChevronLeft from "../assets/images/chevron-left0.svg";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="login-2">
            <div className="nav-back">
                <img
                    src={ChevronLeft}
                    alt="뒤로가기"
                    className="chevron-left"
                    onClick={() => window.history.back()} // 또는 useNavigate(-1)
                />
            </div>
            <div className="frame-12">
                <div className="div2">로그인</div>
                <form className="frame-7" onSubmit={handleSubmit}>
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

                    <button type="submit" className="button">
                        <span className="label2">로그인</span>
                    </button>
                </form>

                
            </div>
        </div>
    );
};

export default Login;
