import React, { useEffect,useState } from 'react'
import { getCustomers } from '../ApiServices/AllApis'
import { Link } from 'react-router-dom'

function Home() {

    const [customerData,setCustomerData]=useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        const result=await getCustomers()
        const customers=result.data
        console.log(customers);

        const current_date= new Date()
        const date=current_date.getUTCDate()
        const month=current_date.getUTCMonth()+1
        const year=current_date.getUTCFullYear()
        const pMonth=month.toString().padStart(2,"0");
        const pDay=date.toString().padStart(2,"0");
        const cDate=`${year}=${pMonth}-${pDay}`

        const res= customers?.filter(item=>item.added_data==cDate)
        console.log(res);
        setCustomerData(res)

    }

    const logout=()=>{
        nav('/')
        sessionStorage.removeItem('token')
    }

  return (
    <>
        <h2 className='text-center text-warning'>Today's Chart</h2>
        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Vehicle Number</th>
                    {/* <th>Services</th>
                    <th>Notes</th>
                    <th>Amount</th> */}
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    customerData.length > 0 ?
                        customerData.map(item=>(
                            <tr>
                                <td>{item.customer}</td>
                                <td>{item.phone}</td>
                                <td>{item.vehicle_number}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link className='btn btn-primary' to={`/service/${item.id}`}>
                                        Services
                                    </Link>
                                </td>
                            </tr>

                        ))
                        :
                        <h3 className='text-danger text-center'>No Customers Available</h3>
                }
            </tbody>

             
        </table>
    </>
  )
}

export default Home