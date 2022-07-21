import React, { useState, useRef, useEffect } from 'react';
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import Auth from "../components/Auth";
import EditForm from "../components/Edit/EditForm";
import { useNavigate } from "react-router-dom";
import useStore from "../utils/Store";
import { cookies } from "../utils/Cookie";
import { url } from "../utils/_config";
import "./Edit.scss";

const Edit = () => {

    const { userId, setUserId, userName, setUserName } = useStore();

    const navigate = useNavigate();

    const idInput = useRef();
    const nameInput = useRef();

    const reset = () => {
        idInput.current.focus();
    };

    const urlString = window.location.href.split("/");
    const urlIndex = urlString[urlString.length -1];

    let api = url(`user/${urlIndex}`)

    const handelCallApi = async () => {
        let option = {
            method: "GET",
            headers: {
                'authorization': cookies.get("token"),
            },
        };

        try {
            const response = await fetch(api, option);
            const res = await response.json()
            setUserId(res[0].user_id)
            setUserName(res[0].user_name)
        } catch (error) {
            alert("[Call User Edit Error] 관리자에게 문의 주세요\n" + error.message)
        }
    };
    
    const handleUpdate = async () => {
        if(userId == "") { idInput.current.focus(); return alert("아이디를 입력해주세요.") };
        if(userName == "") { nameInput.current.focus(); return alert("이름를 입력해주세요.") };

        let params = {
            user_id : userId,
            user_name : userName,
        }

        let option = {
            method: "PUT",
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
    }, []);

    return (
        <Auth>
            <div className="edit">
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
                <EditForm 
                    setKeyPress={handleOnKeyPress}
                    idInput={idInput}
                    nameInput={nameInput}
                />
            </div>
        </Auth>
    );
};

export default Edit;