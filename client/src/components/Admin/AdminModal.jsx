import useStore from "../../utils/Store";
import "./AdminModal.scss";
import { cookies } from "../../utils/Cookie";
import { url } from "../../utils/_config"
const AdminModal = () => {

    const { userIndex, resetUsers, setUsers, setDeleteModal } = useStore()
    const api = url("user");

    const handelCallApi = async () => {
        let option = {
            method: "GET",
            headers: {
                'authorization': cookies
            },
        };
        const response = await fetch(api, option);
        const res = await response.json();
        resetUsers([])
        res.map((v, i) => {
            setUsers(v)
        })
    }

    const handelRemove = async (indexId) => {
        let params = {
            id : indexId
        };
        let option = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': cookies.get("token"),
            },
            body: JSON.stringify(params)
        };

        try{
            const response = await fetch(api, option);
            const res = await response.json()
            if (res.status == "success") {
                handelCallApi()
                setDeleteModal(false)
            }
        } catch (error) {
            alert("[ERROR] 관리자에게 문의주세요.\n"+ error.message);
        };
    }
    
    return (
        <div className="admin-modal">
            <div className="admin-modal__contents-box">
                <div className="mb-20">정말 삭제하시겠습니까?</div>
                <div className="btn-wrap flex jcse">
                    <div onClick={() => { handelRemove(userIndex) }}>확인</div>
                    <div onClick={() => { setDeleteModal(false)}}>취소</div>
                </div>
            </div>
        </div>
    );
}

export default AdminModal;