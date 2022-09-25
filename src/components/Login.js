import "./components.css";
import GoogleButton from 'react-google-button'
import { Title } from './general/Title';
import { useUserAuth } from './../context/UserAuthContext';
import { useState, useCallback } from 'react';
import { Spinner } from './general/Spinner';
import { useEffect } from 'react';

export function Login() {
    const { googleSignIn } = useUserAuth();
    const [ isLoading, setIsLoading ] = useState(false);


    const handleGoogleClick = useCallback(async() => {
        try {
            await googleSignIn();     
        } catch (err) {
            console.log( err.message);
        }
    }, [googleSignIn]);     
    
    const redirect = useCallback(() => {
        window.sessionStorage.setItem('loading', 1);
        setIsLoading(true);
        handleGoogleClick();
    }, [handleGoogleClick]);  
    
    useEffect(() => {
        const onLoadSesionStorage = () => {
            const data = sessionStorage.getItem("loading");
            console.log("data ", data);
            if (data) {
                setIsLoading(true);
            }
        }  
      return () => onLoadSesionStorage()
    }, [])
    

    return (
        !isLoading ?
        <div className="login">
                <div className="intro-text">
                <span className="intro-1">
                    Wzmacniając swoją relację, {" "}
                </span> 
                <span className="intro-2">
                    wzmacniasz siebie
                </span>
            </div>
            <div className="box">
                <Title align="center"> Zaloguj się</Title>
                <GoogleButton onClick={redirect} />
            </div>            
        </div> : <Spinner/>
    )
}