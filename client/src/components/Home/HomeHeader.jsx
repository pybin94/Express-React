import "./HomeHeader.scss"

const HomeHeader = () => {
    const metrics = ["사이트 명", "30일", "30일 평균", "7일", "7일 평균", "어제", "오늘"]

    return (
        <div className="home-header">
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

export default HomeHeader;