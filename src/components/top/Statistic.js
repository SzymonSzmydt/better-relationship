

export function Statistic({ progress, text }) { 

    return (
        <div className="top__statistic-section">
            <div className="p-normal">
                <span style={{color: progress < 0 ? "var(--color-error)" : "green"}}>
                    { progress }
                </span>
                <span className="p-text" style={{fontSize: "1rem"}}>&nbsp; % </span>
            </div>
            <div className="p-text">
                { text }
            </div>
        </div>
    )
}