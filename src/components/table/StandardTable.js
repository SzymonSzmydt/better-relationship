export function StandardTable({ first, second, third, children}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-td td-bg"> { first } </th>
                    <td className="table-td td-bg" style={{color: "var(--color-btn-category)"}}> { second } </td>
                            { third ? <td className="table-td td-bg" style={{color: "var(--gradient-dark)"}}> { third }</td> : null }
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    )
}