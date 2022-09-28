import React, { useState } from 'react';

export function TableTr({ lp, userScore, partnerScore}) {
    const [ firstScore ] = useState(userScore);
    const [ secondScore ] = useState(partnerScore);

    return (
        <tr>
            { <td className="table-td">
                 { lp + 1 } 
            </td> }
            { <th className="table-td td__border" style={{color: firstScore <= 5 ? "var(--color-error)" : ""}}> 
                { !firstScore ? null : firstScore.toFixed(2) } 
            </th> }
            { <th className="table-td" style={{color: secondScore <= 5  ? "var(--color-error)" : ""}}> 
                { !secondScore ? null : secondScore.toFixed(2) } 
            </th> }
        </tr>
    )
}