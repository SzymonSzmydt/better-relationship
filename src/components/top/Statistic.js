
export function Statistic({ progress, text }) {

    return (
        <div className="top__statistic-section">
            <div className="p-normal">
                { progress } %
            </div>
            <div className="p-text">
                { text }
            </div>
        </div>
    )
}