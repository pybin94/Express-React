import { useEffect, useState } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import { useNavigate } from "react-router-dom";
import AdminListHeader from "../components/Admin/AdminListHeader";
import AdminUserList from "../components/Admin/AdminUserList";
import useStore from "../utils/Store";
import "./Admin.scss";

const Admin = () => {

    const { 

        setUsers, 
        resetUsers, 

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
            <AdminListHeader />
            <AdminUserList />
        </div>
    )

}

export default Admin;