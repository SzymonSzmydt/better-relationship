
export function Statistic({ progress, text }) { 

    return (
        <div className="top__statistic-section">
            <div className="p-normal">
                <span style={{color: progress < 0 ? "var(--color-error)" : "var(--color-green)"}}>
                    { progress ? progress > 0 ? "+ " + progress : "- " + progress : "- --" }
                </span>
            </div>
            <div className="p-text">
                { text }
            </div>
        </div>
    )
}