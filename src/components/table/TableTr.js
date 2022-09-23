export function TableTr({ lp, userScore, partnerScore}) {
    return (
        <tr>
            { userScore ? <td className="table-td"> { lp + 1 } </td> : null }
            { userScore ? <td className="table-td td__border"> { userScore.toFixed(2) } </td> : null }
            { partnerScore ? <td className="table-td"> { partnerScore.toFixed(2) } </td> : null }
        </tr>
    )
}