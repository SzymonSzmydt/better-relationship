import { createContext, useState, useEffect, useContext } from "react";
import {    signOut,
            onAuthStateChanged,
            GoogleAuthProvider,
            signInWithPopup 
        } from "firebase/auth";
import { auth } from './firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [ user, setUser ] = useState("");

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])


    return (
        <userAuthContext.Provider value={{ user, googleSignIn, logOut }}>
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}