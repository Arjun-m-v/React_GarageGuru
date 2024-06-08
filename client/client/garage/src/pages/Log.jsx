// 
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../ApiServices/AllApis'
import { toast } from 'react-toastify'


function Log() {
    const [userData,setUserData]=useState({
        username:"",password:""
    })
    const handleLogin=async()=>{
        console.log(userData)
        const {username,password}=userData
        if(!username || !password){
            toast.warning("Enter Valid Inputs")
        }
        else{
            const result=await getToken(userData)
            if(result.status==200){
                console.log(result);
                sessionStorage.setItem("token",result.data.token)
                setUserData({username:"",password:""})
                toast.success("Login Success")
                nav('/home')
            }
            else{
                console.log(result);
                toast.error("Login Failed! Invalid username,Password")
            }
        }
    }
  return (
    <>
        <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'90vh'}}>
            <div className='w-50 bg-light p-5 border shadow'>
                <h2>Mechanic Login</h2>
                <form action="">
                    <input type="text" onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='Enter Username' id='' className='form-control my-3' />
                    <input type="password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} id="" placeholder='Enter Password' className='form-control my-3' />
                    <div className='d-flex justify-content-between'>
                        <button type='button' onClick={handleLogin} className='btn btn-success'>Login</button>
                        <Link className='btn btn-warning' to={'/reg'}>New User? Sign Up</Link>

                    </div>
                </form> 

            </div>

        </div>
    </>
  )
}

export default Log