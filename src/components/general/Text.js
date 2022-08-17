import "./css/general.css";

export function Text({ align, children }) {
    return (
        <p className="text" style={{textAlign: align}}>
            { children }
        </p>
    )
}