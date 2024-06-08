import React, { useContext, useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Addcustomer from '../components/Addcustomer';
import { Link } from 'react-router-dom';
import { getCustomers } from '../ApiServices/AllApis';
import { addResponseCustomerContext } from '../ContextApi/CustomerContext';

function Customer() {

  const {addCustomerResponse}=useContext(addResponseCustomerContext)
  const [customers,setCustomers]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getCustomers()
    setCustomers(result.data)
  }

  console.log(customers);

  return (
    <>
      <div className='container-fluid p-5'>
        <h2 className='mb-2'>Customers</h2>
        <Row>
          <Col sm={6} md={2}>
            <Addcustomer/>
          </Col>
          <Col sm={6} md={10}>
            <div className='row'>
              {
                customers.length>0 ?
                customers.map(item=>(
                  <Card style={{ width: '18rem' }} className='shadow border m-3'>
                  <Card.Img variant="top" height={'200px'} src={item.image?item.image:"https://t3.ftcdn.net/jpg/02/52/37/18/360_F_252371808_YjQRQY8aOCMfQcFZsWrjfevycGgEOzSn.jpg"} />
                  <Card.Body>
                    <Card.Title>
                      {item.vehicle_number}
                    </Card.Title>
                    <Card.Text>
                      <h5><b>Customer : {item.customer}</b></h5>
                      <p>Customer : {item.phone}</p>
                    </Card.Text>
                    <Link to={`/service/${item.id}`} className='btn btn-primary'>Services</Link>
                  </Card.Body>
                  </Card>
                ))
                :
                <h4 className='text-center text-danger'>No Customers Available!!</h4>
              }

            

            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Customer