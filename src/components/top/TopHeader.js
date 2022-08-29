
export function TopHeader({ logOut }) {

    const handleLogOut = async() => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <header className="header">
            <span className="material-symbols-outlined settings-icon" 
                    onClick={handleLogOut} >
                    power_settings_new
            </span>
        </header>
    )
}

            