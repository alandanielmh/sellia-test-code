import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvier = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvier) 
        // const credentials = GoogleAuthProvider.credentialFromResult( result )
        const {displayName, email, photoURL, uid} = result.user
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({ email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
        const { photoURL, uid} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName})
        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error.message)
        return { ok: false, errorMessage: error.message}
    }
}

export const logInWithEmailAndPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { photoURL, uid, displayName } = resp.user
        return {
            ok: true,
            //User info
            displayName, photoURL, uid
        }
    } catch (error) {
        console.log(error.message)
        return { ok: false, errorMessage: error.message}
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}