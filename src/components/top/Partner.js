import { useNavigate } from 'react-router-dom';

export function Partner() {
    const navigate = useNavigate();
    const style = {
        cursor: "pointer",
        marginTop: "1rem",
        alignSelf: "baseline",
        border: "1px solid var(--color-green)",
        borderRadius: "var(--radius)",
        color: "var(--color-white)"
    }

    return (
        <div style={style} onClick={()=> navigate("/search")}>
            <span className="material-symbols-outlined icon">person_add</span>
        </div>
    )
}