import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            toast.error("Please Login")
            return navigate("/login");
        };
    });

    return children;
};

export default RequireAuth;