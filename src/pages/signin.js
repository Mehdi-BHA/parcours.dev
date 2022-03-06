import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Link as MuiLink,
    Grid,
    Box,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { signInSchema } from "../validations/schemas/auth";
import { login, signInWithGoogle } from "../services/auth.services";
import ErrorAlert from "../components/ErrorAlert";
import { FORGOT_PASSWORD, HOME, SIGN_UP } from "../constants/routes";
import Layout from "../components/Layout";
import _ from "lodash";
import { customErrorMsg } from "../utils/errors";
import Link from "next/link";

const SignIn = () => {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (email, password) => {
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            setLoading(false);
            router.push(HOME);
        } catch (error) {
            setLoading(false);
            setError(customErrorMsg(error));
        }
    };

    const handleLoginWithGoogle = async (email, password) => {
        try {
            setError("");
            setLoadingGoogle(true);
            await signInWithGoogle(email, password);
            setLoadingGoogle(false);
            router.push(HOME);
        } catch (error) {
            setLoadingGoogle(false);
            setError(customErrorMsg(error));
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            handleLogin(values.email, values.password);
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
                        Sign in
                    </Typography>
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
                        />
                        <TextField
                            error={Boolean(formik.touched.password && formik.errors.password)}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                        />
                        <LoadingButton
                            loading={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            Sign in
                        </LoadingButton>
                        <LoadingButton
                            loading={loadingGoogle}
                            onClick={handleLoginWithGoogle}
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with google
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href={FORGOT_PASSWORD} variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2">
                                    Dont have an account?{" "}
                                    <Link href={SIGN_UP}>
                                        <a>Sign Up</a>
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};
export default SignIn;
