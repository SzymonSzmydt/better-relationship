
export function UserIcon({ image }) {

    const style = {
        borderRadius:"var(--radius)"
    }

    return (
        <figure>
            <img src={image ? image : null} alt="User" style={style} />
        </figure>
    )
}