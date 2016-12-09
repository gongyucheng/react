import React from 'react'
export default class StaffItem extends React.Component
{
    render()
    {
        return (
            <tr>
                <td className="itemTD">李四</td>
                <td className="itemTD">李四</td>
                <td className="itemTD">李四</td>
                <td className="itemTD">李四</td>
                <td className="itemTD">
                    <a className="itemBtn">删除</a>
                    <a className="itemBtn">详情</a>
                </td>
            </tr>
        )
    }
}