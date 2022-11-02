import "./table.css";

export function StandardTable({ text, second, third, children}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-td td-bg"> { text } </th>
                    <th className="table-td td-bg"> { second } </th>
                    <th className="table-td td-bg"> { !third ? "Partner" : third }</th>
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    )
}