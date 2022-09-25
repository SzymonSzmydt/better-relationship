import "./table.css";

export function StandardTable({ text, second, third, children}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-td td-bg"> { text } </th>
                    <td className="table-td td-bg" style={{color: "var(--color-btn-category)"}}> { second } </td>
                    <td className="table-td td-bg" style={{color: "var(--gradient-dark)"}}> { !third ? "Partner" : third }</td>
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    )
}