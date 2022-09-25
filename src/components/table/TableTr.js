import React, { useState } from 'react';

export function TableTr({ lp, userScore, partnerScore}) {
    const [ firstScore ] = useState(userScore);
    const [ secondScore ] = useState(partnerScore);

    return (
        <tr>
            { <td className="table-td"> { lp + 1 } </td> }
            { <td className="table-td td__border"> { !firstScore ? null : firstScore.toFixed(2) } </td> }
            { <td className="table-td"> { !secondScore ? null : secondScore.toFixed(2) } </td> }
        </tr>
    )
}