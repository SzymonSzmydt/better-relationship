import "./components.css";
import GoogleButton from 'react-google-button'
import { Title } from './general/Title';
import { useUserAuth } from './../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"

export function Login() {
    const { googleSignIn, user } = useUserAuth();
    const navigate = useNavigate();
    const [ isLogged, setIsLogged ] = useState(false);

    const handleGoogleClick = async() => {
        try {
            await googleSignIn();
            navigate('/home');
        } catch (err) {
            console.log(console.message);
        }
    }

    // useEffect(()=> {
    //     const redirect =() => {
    //         navigate('/home');
    //     }
    //     return () => redirect();
    // }, [isLogged, user]);

    return (
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
                <GoogleButton onClick={handleGoogleClick} />
            </div>
        </div>
    )
}