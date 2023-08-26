import axios from "axios";


//creating a common structure for all api requests

export const commonRequest = async(method, url, body, header) => {
    let config = {
        method,
        url,
        headers : header ? header : "application/json",
        data : body 
    }
    //api call
    return axios(config).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
        return err;
    });
}

//file type 
// body form data  - headers Content-type: multipart/formData

//if no file type data in api then we have to add the header ...
    // - headers   we must mention               application/json
    
