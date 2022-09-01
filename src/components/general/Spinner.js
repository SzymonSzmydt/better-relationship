export function Spinner() {
    const style={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
    return (
        <div style={style}>
            <div className="lds-dual-ring"/>
        </div>
    
    )
}