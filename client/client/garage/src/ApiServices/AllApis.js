import base_url from "./base_url";
import CommonApi from "./CommonApi";

//to get whole customer details
export const getCustomers=async(header)=>{
    return await CommonApi("","",`${base_url}/customer/`,"GET")
}

export const getSpecificCustomer=(id,header)=>{
    return CommonApi("","",`${base_url}/customer/${id}`,"GET")
}

export const addCustomer=async(header,data)=>{
    return await CommonApi(header,data,`${base_url}/customer/`,"POST")
}

export const addService=async(id,data,header)=>{
    return await CommonApi(header,data,`${base_url}/customer/${id}`,"POST")
}

export const UserRegister=async(data)=>{
    return await CommonApi("",data,`${base_url}/user/`,"POST")
}

export const getToken=async(data)=>{
    return await CommonApi("",data,`${base_url}/token`,"POST")
}