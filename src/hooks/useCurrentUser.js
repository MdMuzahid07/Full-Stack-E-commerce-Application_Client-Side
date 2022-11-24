import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../firebase.init';

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState({});

    try {
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setCurrentUser(user)
                }
            });
        }, []);
    } catch (error) {
        setError(error)
    }

    return { currentUser, error };
};

export default useCurrentUser;