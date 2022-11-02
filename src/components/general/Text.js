import "./css/general.css";

export function Text({ align, children, color }) {
    return (
        <p className="text" style={{textAlign: align, color: color}}>
            { children }
        </p>
    )
}