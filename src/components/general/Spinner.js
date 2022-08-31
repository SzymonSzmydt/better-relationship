export function Spinner() {
    const style={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
    return (
        <div style={style}>
            <div class="lds-dual-ring"/>
        </div>
    
    )
}