import useStore from "../../utils/Store";

const JoinForm = ({ idInput, pwInput, pwCheckInput, nameInput, handleOnKeyPress}) => {

    const { userId, setUserId, userPw,setUserPw, userPwCheck, setUserPwCheck, userName, setUserName,  userIndex } = useStore()
    
    return (
        <div className="w15 m0-auto">
        id:<input 
            type="text" 
            onChange={(e) => {
                setUserId(e.target.value)
            }}
            onKeyPress={handleOnKeyPress}
            value={userId}
            ref={idInput}
        />
        pw:<input 
            type="password" 
            onChange={(e) => {
                setUserPw(e.target.value)
            }} 
            onKeyPress={handleOnKeyPress}
            value={userPw}
            ref={pwInput}
        />
        pw check:<input 
            type="password" 
            onChange={(e) => {
                setUserPwCheck(e.target.value)
            }} 
            onKeyPress={handleOnKeyPress}
            value={userPwCheck}
            ref={pwCheckInput}
        />
        name:<input 
            type="name" 
            onChange={(e) => {
                setUserName(e.target.value)
            }} 
            onKeyPress={handleOnKeyPress}
            value={userName}
            ref={nameInput}
        />
    </div>
    )
}

export default JoinForm;