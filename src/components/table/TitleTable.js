export function TitleTable({ title, first, second, firstAnswer, secondAnswer }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="3" className="table-td td-bg"> { title } </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="table-td td-bg-a"> { first } </td>
                    <td className="table-td"> { firstAnswer } </td>
                </tr>
                <tr>
                    <td className="table-td td-bg-a"> { second } </td>
                    <td className="table-td"> { secondAnswer } </td>
                </tr>
            </tbody>
        </table>
    )
}