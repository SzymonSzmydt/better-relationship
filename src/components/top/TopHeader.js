import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function TopHeader({ logOut }) {
    const navigate = useNavigate();

    const handleLogOut = async() => {
        try {
            await logOut();
            navigate("/", true);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <header className="header">
            <span className="material-symbols-outlined settings-icon" 
                    onClick={handleLogOut}>
                    power_settings_new
            </span>
            <Link to="/home" className="link"> Home </Link>
        </header>
    )
}

            