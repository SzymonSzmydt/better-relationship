export function TableTr({ lp, userScore, partnerScore}) {
    return (
        <tr>
            <td className="table-td"> { lp + 1 } </td>
            <td className="table-td"> { userScore } </td>
            <td className="table-td"> { partnerScore } </td>
        </tr>
    )
}