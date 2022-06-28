import { removeCookie } from "../../utils/Cookie";
import token from "../../utils/Token";

const HomeHeader =() => {

    const navigate = useNavigate();

    return (
        <div className="HomeHeader">
            <img src="" alt="" />
            <div className="flex jce">
                <button onClick={() => {navigate("/admin")}}>계정관리</button> 
                <br />
                <button onClick={ removeCookie } >
                    로그아웃
                </button>
            </div>
        </div>
    )
}

export default HomeHeader;