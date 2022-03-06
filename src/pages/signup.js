import { useState } from "react";
import Link from "next/link";
import _ from "lodash"
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { Avatar, TextField, Box, Typography, Container, InputAdornment, IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signUpSchema } from "../validations/schemas/auth";
import { register } from "../services/auth.services";
import ErrorAlert from "../components/ErrorAlert";
import { HOME, SIGN_IN } from "../constants/routes";
import Layout from "../components/Layout"
import { handleDisplayName } from "../utils/strings";

const SignUp = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (email, password,displayName) => {
        try {
            setError("");
            setLoading(true);
            await register(email, password,displayName);
            setLoading(false);
            router.push(HOME);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstname:"",
            lastname:"",
            email: "",
            password: "",
            passwordConfirmation:""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            handleRegister(values.email, values.password,handleDisplayName(values.firstname,values.lastname));
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <Layout nonAuth>
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                        {error && <ErrorAlert message={error} />}
                        <Box display="flex">
                            <TextField
                                error={Boolean(formik.touched.firstname && formik.errors.firstname)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.firstname}
                                helperText={formik.touched.firstname && formik.errors.firstname}
                                variant="filled"
                                margin="normal"
                                label="Firstname"
                                name="firstname"
                                sx={{ mr: "1px" }}
                            />
                            <TextField
                                error={Boolean(formik.touched.lastname && formik.errors.lastname)}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.lastname}
                                helperText={formik.touched.lastname && formik.errors.lastname}
                                variant="filled"
                                margin="normal"
                                label="Lastname"
                                name="lastname"
                            />
                        </Box>
                        <TextField
                            error={Boolean(formik.touched.email && formik.errors.email)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="filled"
                            margin="normal"
                            fullWidth
                            label="Email adress"
                            name="email"
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="filled"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <TextField
                            error={Boolean(formik.touched.passwordConfirmation && formik.errors.passwordConfirmation)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirmation}
                            helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                            variant="filled"
                            margin="normal"
                            fullWidth
                            name="passwordConfirmation"
                            label="Confirm password"
                            type="password"
                        />
                        <LoadingButton
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign up
                        </LoadingButton>
                        <Typography variant="body2">Already have an account? <Link href={SIGN_IN}><a>sign in</a></Link> </Typography>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default SignUp;
