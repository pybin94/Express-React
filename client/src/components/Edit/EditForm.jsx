import useStore from "../../utils/Store";

const EditForm = ({setKeyPress, idInput, nameInput}) => {

    const { userId, setUserId, userName, setUserName } = useStore()

    return (
        <div className="edit-form w15 m0-auto">
            id:<input 
                type="text" 
                onChange={(e) => {
                    setUserId(e.target.value)
                }}
                onKeyPress={setKeyPress}
                value={userId}
                ref={idInput}
            />
            name:<input 
                type="name" 
                onChange={(e) => {
                    setUserName(e.target.value)
                }} 
                onKeyPress={setKeyPress}
                value={userName}
                ref={nameInput}
            />
        </div>
    )
}

export default EditForm;