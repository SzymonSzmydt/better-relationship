import React, { useState } from 'react';

export function TitleTable({ title, first, second, firstAnswer, secondAnswer }) {
    const [ firstName ] = useState(first);
    const [ secondName ] = useState(second);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="3" className="table-td td-bg"> { title } </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="table-td td-bg-a"> { firstName } </td>
                    <td className="table-td"> { firstAnswer } </td>
                </tr>
                <tr>
                    <td className="table-td td-bg-a"> { secondName } </td>
                    <td className="table-td"> { secondAnswer } </td>
                </tr>
            </tbody>
        </table>
    )
}