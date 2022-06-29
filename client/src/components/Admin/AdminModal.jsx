import useStore from "../../utils/Store";
import "./AdminModal.scss";
const AdminModal = () => {

    const { userIndex, resetUsers, setUsers, setDeleteModal } = useStore()

    const handelCallApi = async () => {

        const api = "http://13.215.73.68/user";
        const response = await fetch(api);
        const res = await response.json();
        resetUsers([])
        res.map((v, i) => {
            setUsers(v)
        })
    }

    const handelRemove = async (indexId) => {
        const api = "http://13.215.73.68/user"
        let params = {
            id : indexId
        };
        let option = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
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
            alert("[DELETE USER ERROR] 관리자에게 문의주세요.\n"+ error.message);
        };
    }
    
    return (
        <div className="AdminModal">
            <div className="AdminModal__contents-box">
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
