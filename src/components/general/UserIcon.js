import { Spinner } from './Spinner';

export function UserIcon({ user, image }) {
    const style = {
        borderRadius:"var(--radius)", 
        width: "5rem",
        alignSelf: "baseline",
        boxShadow: '0 0 5px 5px var(--logo__user-img-shadow)'
    };
    return (
        <figure>
            { image ? 
            <img src={image} alt="User" style={style} /> :
            <Spinner/> }
            <figcaption>
                <p style={{textAlign: "center", color: "var(--logo__user-name)", marginTop: "0", fontWeight: '600'}}>
                    { user ? user.split(' ', 1) : " " }
                </p>
            </figcaption>
        </figure>
    )
}