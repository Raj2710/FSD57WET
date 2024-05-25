import React from 'react'
import Card from './Card'

function Dashboard() {
    let data = [
        {
            title:"Earnings Monthly",
            value:"$ 40,000",
            color:"primary",
            icon:"calendar",
            isProgress:false
        },
        {
            title:"Earnings Annual",
            value:"$ 215,000",
            color:"success",
            icon:"dollar-sign",
            isProgress:false
        },
        {
            title:"Task",
            value:"10",
            color:"info",
            icon:"clipboard-list",
            isProgress:true
        },
        {
            title:"Pending Requests",
            value:"18",
            color:"warning",
            icon:"comments",
            isProgress:false
        }
    ]
    return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                
                    <div className='row'>
                        {
                            data.map((e,i)=>{
                                return <Card data={e} key={i}/>
                            })
                        }                               
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard
