import "./css/general.css";

export function Text({ children }) {
    return (
        <p className="text">
            { children }
        </p>
    )
}