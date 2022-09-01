import { Title } from './../general/Title';
import { Spinner } from './Spinner';

export function UserIcon({ user, image }) {
    const style = {
        borderRadius:"var(--radius)", 
        width: "5rem",
        alignSelf: "baseline"
    };

    return (
        <figure>
            { image ? 
            <img src={image} alt="User" style={style} /> :
            <Spinner/> }
            <figcaption>
                <Title align={"center"}>
                    { user ? user.displayName.split(' ', 1) : " " }
                </Title>
            </figcaption>
        </figure>
    )
}