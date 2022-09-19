import { Title } from './../general/Title';
import { Spinner } from './Spinner';

export function UserIcon({ user, image }) {
    const style = {
        borderRadius:"var(--radius)", 
        width: "5rem",
        alignSelf: "baseline",
        opacity: 0.8
    };
    return (
        <figure>
            { image ? 
            <img src={image} alt="User" style={style} /> :
            <Spinner/> }
            <figcaption>
                <Title align={"center"} color={"var(--color-bg)"}>
                    { user ? user.split(' ', 1) : " " }
                </Title>
            </figcaption>
        </figure>
    )
}