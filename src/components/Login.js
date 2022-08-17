import "./components.css";
import GoogleButton from 'react-google-button'
import { Window } from './general/Window';
import { Title } from './general/Title';

export function Login() {

    return (
        <div className="login">
            <Window>
            <Title align="center"> Zaloguj się</Title>
                <GoogleButton
                    onClick={() => { console.log('Google button clicked') }}
                />
                <button className="facebook">Sign in with Facebook</button>
            </Window>
        </div>

    )
}