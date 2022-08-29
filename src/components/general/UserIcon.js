
export function UserIcon({ image }) {

    return (
        <figure>
            <img src={image} alt="User image" style={{borderRadius:"var(--radius)"}} />
        </figure>
    )
}