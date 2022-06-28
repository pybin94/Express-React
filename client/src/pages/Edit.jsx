import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import { useNavigate } from "react-router-dom";
import useStore from "../utils/Store";
import "./Edit.scss";

const Edit = () => {

    const { userIndex } = useStore()


    const navigate = useNavigate()

    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const idInput = useRef();
    const nameInput = useRef();

    let url = window.location.href
    let parseUrl = url.split("/")

    const reset = () => {
        idInput.current.focus();
    };

    const handelCallApi = async () => {
        let api = `http://13.215.73.68/user/${userIndex}`
        try {
            const response = await fetch(api)
            const res = await response.json()
            setUserId(res[0].user_id)
            setUserName(res[0].user_name)
        } catch (error) {
            alert("[Call User Edit Error]\n관리자에게 문의 주세요\n" + error.message)
        }
    }

    const handleUpdate = async () => {    

        if(userId == "") { idInput.current.focus(); return alert("아이디를 입력해주세요.") };
        if(userName == "") { nameInput.current.focus(); return alert("이름를 입력해주세요.") };

        let api = `http://13.215.73.68/user/${userIndex}`
        let params = {
            user_id : userId,
            user_name : userName,
        }

        let option = {
            method: "PUT",
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
                alert("설정이 변경되었습니다.")
                navigate(-1);
            }
        } catch (error) {
            reset();
            alert("[Update User Edit Error]\n관리자에게 문의주세요.\n"+ error.message);
        };
    };

    const handleOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    useEffect(() => {
        handelCallApi()
    }, [])

    return (
        <div className="login">
            <MyHeader 
                leftChild={
                    <MyButton 
                        text={"뒤로가기"} 
                        onClick={() => {navigate(-1)}} 
                    />
                }
                rightChild={
                    <MyButton 
                        text={"수정하기"} 
                        onClick={handleUpdate} 
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
                name:<input 
                    type="name" 
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }} 
                    onKeyPress={handleOnKeyPress}
                    value={userName}
                    ref={nameInput}
                />
            </div>
        </div>
    )
};

export default Edit;