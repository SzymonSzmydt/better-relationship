import "./components.css";
import GoogleButton from 'react-google-button'
import { Title } from './general/Title';
import { useUserAuth } from './../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
    const { googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleGoogleClick = async(e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (err) {
            console.log(console.message);
        }
    }

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
                <button className="facebook">Sign in with Facebook</button>
            </div>
        </div>
    )
}