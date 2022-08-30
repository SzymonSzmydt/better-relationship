
export function Statistic({ progress, text }) {

    return (
        <div className="top__statistic-section">
            <div className="p-normal">
                { progress } <span className="p-text" style={{fontSize: "1rem"}}>%</span>
            </div>
            <div className="p-text">
                { text }
            </div>
        </div>
    )
}