import React, { useState, useRef } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import { useNavigate } from "react-router-dom";
import "./Join.scss";

const Login = () => {

    const navigate = useNavigate()

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPwCheck, setUserPwCheck] = useState("");
    const [userName, setUserName] = useState("");
    const idInput = useRef();
    const pwInput = useRef();
    const pwCheckInput = useRef();
    const nameInput = useRef();

    const reset = () => {
        setUserId("");
        setUserPw("");
        setUserPwCheck("");
        setUserName("");
        idInput.current.focus();
    };

    const handleCreate = async () => {    

        if(userId == "") { idInput.current.focus(); return alert("아이디를 입력해주세요.") };
        if(userPw == "") { pwInput.current.focus(); return alert("비밀번호를 입력해주세요.") };
        if(userPw == "") { pwInput.current.focus(); return alert("비밀번호 확인을 입력해주세요.") };
        if(userName == "") { nameInput.current.focus(); return alert("이름를 입력해주세요.") };
        if(userPw !== userPwCheck) {
            setUserPw("");
            setUserPwCheck("");
            pwInput.current.focus();
            return alert("비밀번호가 일치하지 않습니다") 
        };
        
        let api = "http://13.215.73.68/user"
        let params = {
            user_id : userId,
            user_pw : userPw,
            user_name : userName,
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
            
            if(res.status == "fail") {
                alert("잘못된 접근 방법입니다.");
                return reset();
            }
            if(res.status == "exist") {
                alert("사용중인 아이디입니다.");
                setUserId("");
                return idInput.current.focus();
            }
            if (res.status == "success") {
                alert("계정이 추가되었습니다.")
                navigate(-1);
            }

        } catch (error) {
            reset();
            alert("[ERROR] 관리자에게 문의주세요.\n"+ error.message);
        };
    };

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleCreate();
        }
    };

    return (
        <div className="login">
            <MyHeader 
                leftChild={
                    <MyButton 
                        text={"뒤로가기"} 
                        onClick={() => {navigate(-1)}} 
                    />
                }
            />

            <div className="w15 m0-auto">
                id:<input 
                    type="text" 
                    onChange={(e) => {
                        setUserId(e.target.value)
                    }}
                    onKeyPress={handleOnKeyPress}
                    value={userId}
                    ref={idInput}
                />
                pw:<input 
                    type="password" 
                    onChange={(e) => {
                        setUserPw(e.target.value)
                    }} 
                    onKeyPress={handleOnKeyPress}
                    value={userPw}
                    ref={pwInput}
                />
                pw check:<input 
                    type="password" 
                    onChange={(e) => {
                        setUserPwCheck(e.target.value)
                    }} 
                    onKeyPress={handleOnKeyPress}
                    value={userPwCheck}
                    ref={pwCheckInput}
                />
                name:<input 
                    type="name" 
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} 
                    onKeyPress={handleOnKeyPress}
                    value={userName}
                    ref={nameInput}
                />
                <button 
                    type="submit"
                    onClick={handleCreate}
                >
                    추가하기
                </button>
            </div>
        </div>
    )
};

export default Login;