import { useNavigate } from 'react-router-dom';

export function TopHeader({ logOut, style }) {
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
        <header className="header" style={style}>
            <span className="material-symbols-outlined settings-icon" 
                    onClick={handleLogOut}>
                    power_settings_new
            </span>
        </header>
    )
}

            