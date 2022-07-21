import React, { useState, useEffect, useRef } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import Auth from "../components/Auth";
import JoinForm from "../components/Join/JoinForm"
import useStore from "../utils/Store";
import { cookies } from "../utils/Cookie";
import { url } from "../utils/_config";
import { useNavigate } from "react-router-dom";
import "./Join.scss";

const Login = () => {

    const navigate = useNavigate()
    const { userId, setUserId, userPw,setUserPw, userPwCheck, setUserPwCheck, userName, setUserName } = useStore()

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

    useEffect(() => {
        reset()
    }, [])

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
        
        let api = url("user")
        let params = {
            user_id : userId,
            user_pw : userPw,
            user_name : userName,
        }

        let option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': cookies.get("token"),
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
        <Auth>
            <div className="join">
                <MyHeader 
                    leftChild={
                        <MyButton 
                            text={"뒤로가기"} 
                            onClick={() => {navigate(-1)}} 
                        />
                    }
                    rightChild={
                        <MyButton 
                            text={"추가하기"} 
                            onClick={handleCreate} 
                        />
                    }
                />
                <JoinForm 
                    idInput={idInput}
                    pwInput={pwInput}
                    pwCheckInput={pwCheckInput}
                    nameInput={nameInput}
                    handleOnKeyPress={handleOnKeyPress}
                />
            </div>
        </Auth>
    )
};

export default Login;