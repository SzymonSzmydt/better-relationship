export function TitleTable({ title, first, second, firstAnswer, secondAnswer }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colspan="3" className="table-td td-bg"> { title } </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="table-td td-bg"> { first } </th>
                    <td className="table-td"> { firstAnswer } </td>
                </tr>
                <tr>
                    <th className="table-td td-bg"> { second } </th>
                    <td className="table-td"> { secondAnswer } </td>
                </tr>
            </tbody>
        </table>
    )
}