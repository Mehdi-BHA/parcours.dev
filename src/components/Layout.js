import { useRouter } from "next/router";
import React from "react";
import { HOME } from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";

const Layout = ({ nonAuth, children }) => {
    const { user } = useAuth();
    const router = useRouter();
    if (nonAuth && user) {
        router.push(HOME);
        return null
    }
    return <main>{children}</main>;
};

export default Layout;
