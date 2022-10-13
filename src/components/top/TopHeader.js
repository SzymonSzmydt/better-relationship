import { useNavigate, Link } from 'react-router-dom';
import { useUserAuth } from './../../context/UserAuthContext';


export function TopHeader({style}) {
    const navigate = useNavigate();
    const { logOut } = useUserAuth(); 

    const handleLogOut = async() => {
        try {
            await logOut();
            navigate("/", {replace: true});
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <header className="header">
            <span className="symbol symbol__power_settings_new" 
                    onClick={()=> handleLogOut()}/>
            <span>
                <Link to="/home" className="logo">two Of us</Link>
            </span>
        </header>
    )
}

            