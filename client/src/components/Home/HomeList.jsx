import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { url } from "../../utils/_config"
import { cookies } from "../../utils/Cookie";
import "./HomeList.scss"

const HomeList = () => {

    const navigate = useNavigate();

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

    }, [])

    return (
        <div className="home-list">
           
        </div>
    )
}

export default HomeList;
