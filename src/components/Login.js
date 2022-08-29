import "./components.css";
import GoogleButton from 'react-google-button'
import { Title } from './general/Title';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 


export function Login() {
    const { googleSignIn, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogNewUser = async() => {
        const userRef = doc(db, 'users', 'allUsers');
        setDoc(userRef, 
            {
            name: user.displayName,
            partner: 'none',
            points: 0 
            }, 
            { merge: true });   
    }

    const handleGoogleClick = async(e) => {
        e.preventDefault();      
        try {
            await googleSignIn();
            navigate("/home");
        } catch (err) {
            console.log(console.message);
        }
        handleLogNewUser();
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