import axios from "axios";

const CommonApi=(reqHeader,reqBody,url,method)=>{
    const options={
        url,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"},
        data:reqBody,
        method
    }
    return axios(options)
}

export default CommonApi