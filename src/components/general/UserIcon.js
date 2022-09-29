import { Spinner } from './Spinner';

export function UserIcon({ user, image }) {
    const style = {
        borderRadius:"var(--radius)", 
        width: "5rem",
        alignSelf: "baseline",
    };
    return (
        <figure>
            { image ? 
            <img src={image} alt="User" style={style} /> :
            <Spinner/> }
            <figcaption>
                <p style={{textAlign: "center", color: "var(--color-bg)", marginTop: "0"}}>
                    { user ? user.split(' ', 1) : " " }
                </p>
            </figcaption>
        </figure>
    )
}