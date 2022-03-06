import React from "react";
import { Button as MuiButton } from "@mui/material";
import Link from "next/link";

const Button = ({ to, children, ...rest }) => {
    if (to) {
        return (
            <Link href={to}>
                <a>
                    <MuiButton{...rest}>
                        {children}
                    </MuiButton>
                </a>
            </Link>
        );
    }
    return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
