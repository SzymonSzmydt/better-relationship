import React, { useState } from 'react';

export function TitleTable({ title, first, second, firstAnswer, secondAnswer }) {
    const [ firstName ] = useState(first);
    const [ secondName ] = useState(second);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="2" className="table-td td-bg"> { title } </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{width: "70%"}} className="table-td td-bg-a"> { firstName.split(' ', 1) } </td>
                    <th className="table-td" style={{color: firstAnswer <= 5 ? "var(--color-error)" : ""}}> { firstAnswer } </th>
                </tr>
                <tr>
                    <td className="table-td td-bg-a"> { secondName.split(' ', 1) } </td>
                    <th className="table-td" style={{color: secondAnswer <= 5 ? "var(--color-error)" : ""}}> { secondAnswer } </th>
                </tr>
            </tbody>
        </table>
    )
}