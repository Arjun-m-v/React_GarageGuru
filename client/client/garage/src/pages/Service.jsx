import React,{useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import AddServices from '../components/AddServices'
import { getSpecificCustomer } from '../ApiServices/AllApis'
import { useParams } from 'react-router-dom'

function Service() {
  const[customer,setCustomer]=useState({})
  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

    const header={
      "Content-type":"application/json",
      "Authorization":`Token ${sessionStorage.getItem('token')}`
    }

    const result=await getSpecificCustomer(id,header)
    // console.log(result);
    if (result.status == 200){
      setCustomer(result.data)
    }
    else{
      console.log(result);
    }
  }

  console.log(customer);

  return (
    <>
      <div className='container-fluid p-5'>
        <h3 className='mb-3'>Services</h3>

        <div className='my-4'>
          <h4>Customer : {customer.customer}</h4>
          <h4>Vehicle Number : {customer.vehicle_number}</h4>
        </div>

        <Row>
          <Col sm={6} md={2}>
            <AddServices />
          </Col>
          <Col sm={6} md={10}>
            <table className='table table-info table-bordered'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  customer?.Services?.length>0?
                  customer.services.map(item=>(
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.notes}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))
                  :
                  <h3 className='text-danger'>No Services are Availbale</h3>
                }
              </tbody>
            </table>
          </Col>
        </Row>
        <div className='my-5 p-3 text-center'>
                <h3>Total Service Charge : Rs.<span className='text-success'>{customer.total_amount?customer.total_amount:0}</span></h3>
        </div>
      </div>
    </>
  )
}

export default Service