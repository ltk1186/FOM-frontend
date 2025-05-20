import React, { useState, useRef, useEffect } from "react";
import "./Record.css";

const Record = () => {
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState([]);
    const [listening, setListening] = useState(false); // 음성인식 상태
    const chatContainerRef = useRef(null);

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = useRef(null);

    useEffect(() => {
        if (!SpeechRecognition) {
            alert("죄송합니다. 이 브라우저는 음성 인식을 지원하지 않습니다.");
            return;
        }

        recognition.current = new SpeechRecognition();
        recognition.current.lang = "ko-KR";
        recognition.current.continuous = false;
        recognition.current.interimResults = false;

        recognition.current.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            setMessage((prevMsg) => `${prevMsg} ${speechToText}`.trim());
        };

        recognition.current.onend = () => {
            setListening(false); // 음성인식 끝나면 상태를 다시 false로 설정
        };

        recognition.current.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setListening(false); // 오류발생시 상태 false
        };
    }, [SpeechRecognition]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;
        setChatList((prev) => [...prev, message]);
        setMessage("");
    };

    const handleSpeechInput = () => {
        if (listening || !recognition.current) {
            console.log("이미 음성인식 중이거나, 지원되지 않습니다.");
            return; // 이미 인식 중이라면 재시작 x
        }

        recognition.current.start();
        setListening(true);
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
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

            <div className="input-container">
                <input
                    type="text"
                    placeholder="메시지를 입력하세요..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                />
                <button onClick={handleSendMessage}>보내기</button>
                <button onClick={handleSpeechInput} disabled={listening}>
                    {listening ? "🎙️ 듣는 중..." : "🎤 음성 입력"}
                </button>
            </div>
        </div>
    );
};

export default Record;
