import React, { useState, useRef, useEffect } from "react";
import "./Record.css";

const Record = () => {
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState([]);
    const chatContainerRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === "") return; // 빈 값은 무시

        setChatList([...chatList, message]); // 기존의 채팅 리스트에 작성한 메시지 추가
        setMessage(""); // 입력창 초기화
    };

    // 메시지가 추가될 때마다 스크롤을 하단으로 자동 이동
    useEffect(() => {
        chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
    }, [chatList]);

    return (
        <div className="chat-app">
            <div className="chat-container" ref={chatContainerRef}>
                {chatList.map((msg, index) => (
                    <div key={index} className="chat-message">
                        {msg}
                    </div>
                ))}
            </div>
            <form className="input-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="메시지를 입력하세요..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">보내기</button>
            </form>
        </div>
    );
};

export default Record;
