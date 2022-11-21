import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCurrentUser from '../hooks/useCurrentUser';

const RequireAuth = ({ children }) => {
    const { currentUser } = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            toast.error("Please Login")
            return navigate("/login");
        };
    }, [currentUser, navigate]);

    return children;
};

export default RequireAuth;