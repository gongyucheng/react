/**
 * Created by gary on 2016/12/8.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './component.jsx'
import StaffHeader from './StaffHeader.jsx'
import StaffItem from './StaffItem.jsx'
export default class Main extends React.Component
{
    render()
    {
        return (<div>
             <StaffHeader />
              <StaffItem />
            </div>
        )
    }
}
ReactDOM.render(<Main />,document.getElementById('app'));