import { useEffect } from 'react';
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";
import AdminListHeader from "../components/Admin/AdminListHeader";
import AdminUserList from "../components/Admin/AdminUserList";
import useStore from "../utils/Store";
import { cookies } from "../utils/Cookie";
import { url } from "../utils/_config";
import "./Admin.scss";

const Admin = () => {

    const { 
        setUsers, 
        resetUsers, 
    } = useStore()

    const navigate = useNavigate();

    const handelCallApi = async () => {
        const api = url("user");
        let option = {
            method: "GET",
            headers: {
                'authorization': cookies.get("token"),
            },
        };
        try {
            const response = await fetch(api, option);
            const res = await response.json();

            resetUsers([])
            res.map((v, i) => {
                setUsers(v)
            })
        } catch (error) {
            alert("[handelCallApi Error] 관리자에게 문의 주세요\n" + error.message)
        }
    }

    useEffect(()=> {
        handelCallApi()
    }, [])

    return(
        <Auth>
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
                            text={"계정생성"} 
                            onClick={() => {navigate("/admin/join")}} 
                        />
                    }
                />
                <AdminListHeader />
                <AdminUserList />
            </div>
        </Auth>
    )

}

export default Admin;