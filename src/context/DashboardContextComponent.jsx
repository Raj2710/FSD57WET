import React from 'react'
export const DashboardContext = React.createContext()

function DashboardContextComponent({children}) {
  let cardData = [
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
  return <DashboardContext.Provider value = {{cardData}}> 
  {children}
  </DashboardContext.Provider>
}

export default DashboardContextComponent
