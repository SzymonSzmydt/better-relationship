
export function Partner({ setPartnerSearch }) {
    const style = {
        cursor: "pointer",
        display: "inline",
        padding: "1rem", 
        border: "1px solid var(--color-green)",
        borderRadius: "var(--radius)",
        color: "var(--color-white)"
    }

    return (
        <div style={style} onClick={()=> setPartnerSearch(true)}>
            <span className="material-symbols-outlined">person_add</span>
        </div>
    )
}