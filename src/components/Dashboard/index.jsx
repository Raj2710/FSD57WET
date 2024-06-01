import React,{useContext} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {findIndexById} from '../utils/Helper';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App'; //import the context
import { DashboardContext } from '../../context/DashboardContextComponent';
function Dashboard() {
    
    let {cardData} = useContext(DashboardContext)
    console.log(cardData)
    let {data,setData} = useContext(UserContext)//consuming the context

    let navigate = useNavigate()
    const handleDelete = (id)=>{
        let index = findIndexById(data,id)
        if(index!==-1)
        {
            let newArray = [...data]//deep copy to achieve Immutablity
            newArray.splice(index,1)
            setData(newArray)
        }
        else
            console.error("Invalid Id:"+id)
    }

    return <>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                
                    <div className='row'>
                        {
                            cardData.map((e,i)=>{
                                return <Card data={e} key={i}/>
                            })
                        }                               
                    </div>

                    <div className='row'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Batch</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                data.map((e)=>{
                                    return <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button variant='primary' onClick={()=>navigate(`/view-user/${e.id}`)}>Edit</Button>
                                            &nbsp;&nbsp;
                                            <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                })
                           }
                        </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard
