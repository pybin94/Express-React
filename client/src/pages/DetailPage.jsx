import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import DetailPageHeader from "../components/DetailPage/DetailPageHeader";
import DetailPageData from "../components/DetailPage/DetailPageData";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
    const navigate = useNavigate();
    return (
        <div className="detail-page">
            <MyHeader 
                leftChild={
                    <MyButton 
                        text={"뒤로가기"} 
                        onClick={() => {navigate(-1)}} 
                    />
                }
            />
            <DetailPageHeader />
            <DetailPageData />
        </div>
    )
}

export default DetailPage;