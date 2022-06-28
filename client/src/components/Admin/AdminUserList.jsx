import AdminMadal from "./AdminModal";
import useStore from "../../utils/Store";
import { useNavigate } from "react-router-dom";

const AdminUserList = () => {

    const navigate = useNavigate();
    const { 
        users, 

        setUserIndex ,
        deleteModal,
        setDeleteModal,
    } = useStore()

    return (
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
    )
}

export default AdminUserList;