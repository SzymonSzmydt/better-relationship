import "./css/general.css";

export function Title({ align, children }) {
    return (
        <p className="title" style={{textAlign: align}}>
            { children }
        </p>
    )
}