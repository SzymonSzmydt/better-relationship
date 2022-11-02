
export function Tbody({ lp, userScore, partnerScore}) {

    return (
        <tr className="tbody-tr">
            { <td className="table-td">
                 { lp + 1 } 
            </td> }
            { <th className="table-td td__border" style={{color: userScore < 5 ? "var(--color-error)" : ""}}> 
                { !userScore ? null : userScore.toFixed(2) } 
            </th> }
            { <th className="table-td" style={{color: partnerScore < 5  ? "var(--color-error)" : ""}}> 
                { !partnerScore ? null : partnerScore.toFixed(2) } 
            </th> }
        </tr>
    )
}