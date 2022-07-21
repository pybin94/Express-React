import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/_config"
import { cookies } from "../../utils/Cookie";
import "./HomeList.scss"

const HomeList = () => {

    const navigate = useNavigate();

  
    let [betterzone, setBetterzone] = useState(["베터존", 0, 0, 0, 0, 0, 0]);
    let [powersoft, setPowersoft] = useState(["파워소프트", 0, 0, 0, 0, 0, 0]);
    let [allpick, setAllpick] = useState(["올픽", 0, 0, 0, 0, 0, 0]);
    let [teamlemon, setTeamlemon] = useState(["팀레몬", 0, 0, 0, 0, 0, 0]);
    let [outopowerball, setOutopowerball] = useState(["오파모", 0, 0, 0, 0, 0, 0]);
    let [totoplus, setTotoplus] = useState(["토토플러스", 0, 0, 0, 0, 0, 0]);

    let [siteList, setStieList] = useState([betterzone, powersoft, allpick, teamlemon, totoplus]);

    const handelAnalyticsApi = async (api, arrayStore, arrayState, setArrayState) => {

        arrayStore = [...arrayState];
        let week = 0, month = 0;

        let option = {
            method: "GET",
            headers: {
                'authorization': cookies.get("token"),
            },
        };

        try {
            const response = await fetch(api, option);
            const res = await response.json();
            console.log(res)
            // for(let i = 0; i < 7; i++) {
            //     week += res[i].enterances
            // }
            res.forEach((v, i) => {
                month += res[i].enterances
            })

            arrayStore[5] = res[0].enterances;
            arrayStore[4] = week/7;
            arrayStore[3] = week;
            arrayStore[2] = month/30;
            arrayStore[1] = month;

            setArrayState(arrayStore)
        } catch( error ) {
            alert("[ERROR] 서버통신에 문제가 발생했습니다.\n관리자에게 문의주세요.\n"+ error)
        }
    }

    useEffect(() => {
        handelAnalyticsApi(url("analytics"), "betterzoneArray", betterzone, setBetterzone);
        // handelAnalyticsApi(url("analytics"), "betterzoneArray", betterzone, setPowersoft);
        // handelAnalyticsApi(url("analytics"), "betterzoneArray", betterzone, setAllpick);
        // handelAnalyticsApi(url("analytics"), "betterzoneArray", betterzone, setBetterzone);
        // handelAnalyticsApi(url("analytics"), "betterzoneArray", betterzone, setBetterzone);
        setStieList([betterzone, powersoft, allpick, teamlemon, totoplus])
    }, [])

    return (
        <div className="home-list">
            {
                siteList.map((v, i) => {
                    return (
                        <div 
                            className="home-list-container"
                            key = {i}
                            onClick={()=>{ 
                                navigate(`/detail/${siteList[i][0]}`)
                            }}
                        >
                            {
                                siteList[i].map((v, j)=>{
                                    return (
                                        <div 
                                            className="list-button"
                                            key={j} 
                                        >
                                            {siteList[i][j]}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
                
            }
        </div>
    )
}

export default HomeList;