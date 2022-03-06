import React, { useContext, useState, useEffect, createContext } from "react";
import { getUser } from "../services/auth.services";
import { auth } from "../services/firebase";

const AuthContext = createContext({
    user: null,
});

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userSnap = await getUser(user.uid);
                if (userSnap.exists()) {
                    const data = userSnap.data()
                    setCurrentUser({ ...user, ...data });
                    setLoading(false);
                } else {
                    setCurrentUser(user);
                    setLoading(false);
                }
            } else {
                setCurrentUser(user);
                setLoading(false);
            }
        });

        return unsubscribe;
    }, []);

    const value = {
        user: currentUser,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth, AuthProvider };
