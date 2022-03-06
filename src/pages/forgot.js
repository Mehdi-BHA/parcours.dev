import { useState } from "react";
import { useFormik } from "formik";
import { Avatar, TextField, Box, Typography, Container } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { forgotPasswordSchema } from "../validations/schemas/auth";
import _ from "lodash";
import { forgotPassword, login, signInWithGoogle } from "../services/auth.services";
import ErrorAlert from "../components/ErrorAlert";
import Layout from "../components/Layout";
import { customErrorMsg } from "../utils/errors";

const ForgotPassword = () => {
    
    const [passwordSent, setPasswordSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleForgotPassword = async (email) => {
        try {
            setLoading(true);
            await forgotPassword(email);
            setLoading(false);
            setPasswordSent(true);
        } catch (error) {
            setLoading(false);
            setError(customErrorMsg(error));
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: (values) => {
            handleForgotPassword(values.email, values.password);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });
    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Forgot password ?
                    </Typography>
                    {passwordSent ? (
                        <Box>
                            <Typography align="center" variant="body1" sx={{ my: 4 }}>
                                And email was sent to {formik.values.email}{" "}
                            </Typography>
                        </Box>
                    ) : (
                        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                            {error && <ErrorAlert message={error} />}
                            <TextField
                                error={Boolean(formik.touched.email && formik.errors.email)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                helperText={formik.touched.email && formik.errors.email}
                                variant="filled"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email adress"
                                name="email"
                                autoComplete="off"
                            />
                            <LoadingButton
                                loading={loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 1 }}
                            >
                                send email
                            </LoadingButton>
                        </Box>
                    )}
                </Box>
            </Container>
        </Layout>
    );
};

export default ForgotPassword;
