
export function Statistic({ progress, text, symbols }) { 

    return (
        <div className="top__statistic-section">
            <div className="p-normal">
                <span 
                    style={{color: "var(--color-green)"}}>
                    { progress ? progress > 0 ? symbols ? "+ " + progress : progress : progress : "- --"  }
                </span>
            </div>
            <div className="p-text">
                { text }
            </div>
        </div>
    )
}