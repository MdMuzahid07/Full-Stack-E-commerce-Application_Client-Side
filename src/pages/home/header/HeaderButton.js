import { useNavigate } from "react-router-dom";

const HeaderButton = ({ children }) => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate("/shop")

    return (
        <button onClick={handleOnClick} className="btn btn-dark rounded-full mt-4">{children}</button>
    )
};

export default HeaderButton;