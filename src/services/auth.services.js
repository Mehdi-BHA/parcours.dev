import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    confirmPasswordReset,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const getUser = (uid) => {
    return getDoc(doc(db, "users",uid))
}

const register = async (email, password, displayName) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", cred.user.uid), {
        displayName,
    });
};

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
        url: `http://localhost:3000/signin`,
    });
};

const resetPassword = (oobCode, newPassword) => {
    return confirmPasswordReset(auth, oobCode, newPassword);
};

const logout = () => {
    return signOut(auth);
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

export { login, register, forgotPassword, resetPassword, logout, signInWithGoogle , getUser };
