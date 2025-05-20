import React, { useState, useRef, useEffect } from "react";
import "./Record.css";

const Record = () => {
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState(() => {
        // 로컬스토리지에서 초기값 불러오기
        const saved = localStorage.getItem("diary");
        return saved ? JSON.parse(saved) : [];
    });

    const [listening, setListening] = useState(false); // 음성인식 상태
    const chatContainerRef = useRef(null);

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = useRef(null);

    // 음성인식 초기 설정
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
            setListening(false);
        };

        recognition.current.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            setListening(false);
        };
    }, [SpeechRecognition]);

    // 일기 저장
    const handleSendMessage = () => {
        if (message.trim() === "") return;
        const updated = [...chatList, message];
        setChatList(updated);
        localStorage.setItem("diary", JSON.stringify(updated)); // 로컬 저장
        setMessage("");
    };

    // 음성 입력 시작
    const handleSpeechInput = () => {
        if (listening || !recognition.current) {
            console.log("이미 음성인식 중이거나, 지원되지 않습니다.");
            return;
        }

        recognition.current.start();
        setListening(true);
    };

    // 채팅창 자동 스크롤
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
