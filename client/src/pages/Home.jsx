import HomeList from "../components/Home/HomeList"
import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../utils/Cookie";

import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <MyHeader 
                leftChild={
                    <MyButton 
                        text={"계정관리"} 
                        onClick={() => {navigate("/admin")}} 
                    />
                }
                rightChild={
                    <MyButton 
                        text={"로그아웃"} 
                        onClick={removeCookie} 
                    />
                }
            />
            <HomeList />
        </div>
    )
}
export default Home;