const base_url = require("./base_url");
const { commonRequest } = require("./commonRequest");

//register 
export const registerApi = async(header ,body) => {
    return await commonRequest("POST",`${base_url}/employees/register`,body,header);
}
//get all employees

//add

//edit

//delete

