import "./components.css";
import GoogleButton from 'react-google-button'
import { Title } from './general/Title';

export function Login() {

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
                <GoogleButton
                    onClick={() => { console.log('Google button clicked') }}
                />
                <button className="facebook">Sign in with Facebook</button>
            </div>
        </div>
    )
}