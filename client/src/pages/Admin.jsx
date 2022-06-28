import { useEffect, useState } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import { useNavigate } from "react-router-dom";
import AdminMadal from "../components/Admin/AdminModal";
import useStore from "../utils/Store";
import "./Admin.scss";

const Admin = () => {

    const { 
        users, 
        setUsers, 
        resetUsers, 
        setUserIndex ,
        deleteModal,
        setDeleteModal,
    } = useStore()

    const navigate = useNavigate();

    const handelCallApi = async () => {

        const api = "http://13.215.73.68/user";
        const response = await fetch(api);
        const res = await response.json();
        resetUsers([])
        res.map((v, i) => {
            setUsers(v)
        })
    }

    useEffect(()=> {
        handelCallApi()
    }, [])

    return(
        <div>
            <MyHeader 
                leftChild={
                    <MyButton 
                        text={"뒤로가기"} 
                        onClick={() => {navigate(-1)}} 
                    />
                }
                rightChild={
                    <MyButton 
                        text={"계정추가"} 
                        onClick={() => {navigate("/admin/join")}} 
                    />
                }
            />
            <div className="tac">
                <div className="flex jcse tac">
                    <div className="w25">아이디</div>
                    <div className="w25">이름</div>
                    <div className="w25">생성일</div>
                    <div className="w25">설정</div>
                </div>
                <div>
                    {users.map((v, i) => (
                        <div key={i} className="flex jcse tac">
                            <div className="w25">{v.user_id}</div>
                            <div className="w25">{v.user_name}</div>
                            <div className="w25">{v.join_date}</div>
                            <div className="w25">
                                <button onClick={() => {
                                    setUserIndex(v.id)
                                    navigate(`/admin/edit/${v.id}`)
                                }}>
                                    수정
                                </button>
                                <button onClick={() => {
                                    setDeleteModal(true)
                                    setUserIndex(v.id)
                                }}>
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}
                    {
                        deleteModal == true ? <AdminMadal></AdminMadal> : null
                    }
                </div>
            </div>
        </div>
    )

}

export default Admin;