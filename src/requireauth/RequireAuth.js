import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const RequireAuth = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                return navigate("/login");
            }
        });
    }, [navigate]);

    return children;
};

export default RequireAuth;