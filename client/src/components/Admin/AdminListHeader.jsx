const AdminListHeader = () => {
    const headerText = ["아이디", "이름", "생성일", "설정"]

    return (
    <div className="flex jcse tac">
        {
            headerText.map((v, i) => {
                return (
                    <div className="w25" key={i}>{headerText[i]}</div>
                )
            })
        }
    </div>
    )
}

export default AdminListHeader;