import * as Yup from "yup";

export const signInSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(20).required(),
});

export const signUpSchema = Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(20).required(),
    passwordConfirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
});
export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("L'e-mail n'est pas valide").required("L'adresse e-mail est requise"),
});
