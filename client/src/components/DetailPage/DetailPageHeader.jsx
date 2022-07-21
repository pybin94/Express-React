import "./DetailPageHeader.scss"

const DetailPageHeader = () => {
    const metrics = ["접속자", "신규 접속율", "이탈", "이탈률", "평균 사이트 이용 시간", "검색엔진 유입", "총 페이지 조회수", "방문자 / 총 페이지 조회수"];
    return (
        <div className="detail-page-header">
            {
                metrics.map((v, i)=>{
                    return (
                        <div 
                            key={i}
                        >
                            {metrics[i]}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DetailPageHeader;