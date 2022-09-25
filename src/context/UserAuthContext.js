import { createContext, useState, useEffect, useContext } from "react";
import {    signOut,
            onAuthStateChanged,
            GoogleAuthProvider,
            signInWithRedirect
        } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [ user, setUser ] = useState("");
    const navigate = useNavigate();  

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithRedirect(auth, googleAuthProvider);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            navigate("/home");
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