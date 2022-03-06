import { Alert } from "@mui/material";
import React from "react";

const ErrorAlert = ({message}) => {
    return (
        <Alert severity="error">
            {message}
        </Alert>
    );
};

export default ErrorAlert;
