import "./NotFound.scss"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    return(
        <div className="not-found">
            <h1 className="mb-10">404 ERROR</h1>
            <h4 className="mb-20">페이지를 찾을 수 없습니다.</h4>
            <button onClick={() => {navigate("/")}}>홈으로</button>
        </div>
    )
}

export default NotFound;