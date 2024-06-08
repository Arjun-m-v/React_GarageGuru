import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCustomer } from '../ApiServices/AllApis';
import { addResponseCustomerContext } from '../ContextApi/CustomerContext'

function Addcustomer() {

    const {SetAddCustomerResponse}=useContext(addResponseCustomerContext)

    const [show, setShow] = useState(false);
    const [customerData, Setcustomer] = useState({
        customer:"",phone:"",vehicle_number:"",kilometeres:"",image:""
    });

    // console.log(customer);

    const handleSubmit=async()=>{
        console.log(customerData);
        const {customer,phone,vehicle_number,kilometeres,image}=customerData
        if(!customer || !phone || !vehicle_number || !kilometeres || !image){
            toast.warning("Enter Valid Inputs")
        }
        else{
            const formDAta=new FormData()
            formDAta.append("customer",customerData.customer)
            formDAta.append("phone",customerData.phone)
            formDAta.append("vehicle_number",customerData.vehicle_number)
            formDAta.append("kilometeres",customerData.kilometeres)
            formDAta.append("image",customerData.image)

            const header={
                "Content-Type":"multipart/form-data"
            }

            const result=await addCustomer(header,formDAta)

            if(result.status==201){
                toast.success("Customer Added Successfully ")
                handleClose()
                SetAddCustomerResponse(result)
                Setcustomer({
                    customer:"",phone:"",vehicle_number:"",kilometeres:"",image:""
                })
            }
            else{
                console.log(result);
                toast.error("Customer Registration Failed")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <button className='btn btn-info' onClick={handleShow}>Add Cutomer</button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FloatingLabel controlId="floatingName" label="CustomerName" className="mb-3">
                <Form.Control type="text" placeholder="" onChange={(e)=>{Setcustomer({...customerData,customer:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                <Form.Control type="number" placeholder="n" onChange={(e)=>{Setcustomer({...customerData,phone:e.target.value})}}/>
            </FloatingLabel>
            <FloatingLabel controlId="Kilometer" label="Running Kilometers" className="mb-3">
                <Form.Control type="number" placeholder="" onChange={(e)=>{Setcustomer({...customerData,kilometeres:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="Vehicle" label="Vehicle Registration" className="mb-3">
                <Form.Control type="text" placeholder="" onChange={(e)=>{Setcustomer({...customerData,vehicle_number:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="VehicleImage" label="vehicleimage">
                <Form.Control type="file" placeholder="" onChange={(e)=>{Setcustomer({...customerData,image:e.target.files[0]})}} />
            </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default Addcustomer
