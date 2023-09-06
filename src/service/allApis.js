const base_url = require("./base_url");
const { commonRequest } = require("./commonRequest");

//register 
export const registerApi = async(header ,body) => {
    return await commonRequest("POST",`${base_url}/employees/register`,body,header);
}

//get all employees
export const getAllEmployees = async () => {
    // body = "" , header will take the default header as application/json
    return await commonRequest("GET",`${base_url}/employees/getEmployees`,"")
}

//add

//edit

//delete

