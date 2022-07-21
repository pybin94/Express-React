import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import HomeList from "../components/Home/HomeList"
import HomeHeader from "../components/Home/HomeHeader"
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import useStore from "../utils/Store";
import { cookies, removeCookie } from "../utils/Cookie";
import './Home.scss';


const Home = () => {
    const navigate = useNavigate();
    const { setHasCookie, userAuth, setUserAuth } = useStore()

    let token = jwt_decode(cookies.get("token"))

    return (
        <div className="home">
            <MyHeader 
                leftChild={
                    (token.user_auth !== "U")
                    ? <MyButton 
                        text={"계정관리"} 
                        onClick={() => {navigate("/admin")}} 
                    />
                    : null
                }
                rightChild={
                    <MyButton 
                        text={"로그아웃"} 
                        onClick={() => {
                            removeCookie()
                            setHasCookie(false)
                        }} 
                    />
                }
            />
            <HomeHeader />
            <HomeList />
        </div>
    )
}
export default Home;