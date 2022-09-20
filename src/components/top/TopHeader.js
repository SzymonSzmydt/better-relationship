import { useNavigate } from 'react-router-dom';
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
        <header className="header" style={style}>
            <span className="material-symbols-outlined settings-icon" 
                    onClick={()=> handleLogOut}>
                    power_settings_new
            </span>
        </header>
    )
}

            