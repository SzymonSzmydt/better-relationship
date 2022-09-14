import "./css/general.css";

export function Title({ align, children, color }) {
    return (
        <p className="title" style={{textAlign: align, color: color}}>
            { children }
        </p>
    )
}