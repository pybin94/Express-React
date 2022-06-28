import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';  
import "./MyHeader.scss"

const MyHeader = ({leftChild, rightChild}) => {

    const navigate = useNavigate();

    return (
        <header>
            <div className="head-btn-left">
                {leftChild}
            </div>
            <div className="head-logo">
                <img onClick={() => {navigate("/")}} src={logo} alt="" />
            </div>
            <div className="head-btn-right">
                {rightChild}
            </div>
        </header>
    );
};

export default MyHeader;