import React, { useState, useRef } from 'react';
import useStore from "../utils/Store";
import { setCookie } from "../utils/Cookie";
import "./Login.scss";

const Login = () => {
    const { setHasCookie } = useStore(); 
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const idInput = useRef();

    const reset = () => {
        setUserId("");
        setUserPw("");
        idInput.current.focus();
    };

    const handleSubmit = async () => {    
            
        if(userId == "") return alert("아이디를 입력해주세요.");
        if(userPw == "") return alert("패스워드를 입력해주세요.");
        
        let api = "http://13.215.73.68/login"
        let params = {
            user_id : userId,
            user_pw : userPw
        }

        let option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(params)
        };
    
        try {
            const response = await fetch(api, option);
            const res = await response.json();
            
            if(res.result == "fail") {
                alert("아이디 또는 패스워드를 잘못 입력했습니다.");
                reset();
            } else {
                setHasCookie(true)
                setCookie(res.token);
            }
        } catch (error) {
            reset();
            alert("[ERROR] 관리자에게 문의주세요.\n"+ error.message);
        };
    };

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="login">
            <input 
                type="text" 
                onChange={(e) => {
                    setUserId(e.target.value)
                }}
                onKeyPress={handleOnKeyPress}
                value={userId}
                ref={idInput}
            />
            <input 
                type="password" 
                onChange={(e) => {
                    setUserPw(e.target.value)
                }} 
                onKeyPress={handleOnKeyPress}
                value={userPw}
            />
            <button 
                type="submit"
                onClick={handleSubmit}
            >
                login
            </button>
        </div>
    )
};

export default Login;