const MyButton = ({ text, type, onClick}) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )

}

export default MyButton;