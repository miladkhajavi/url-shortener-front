import axios from "../index"

export const postRequest = async(url, data, headers) => {
    // console.log(axios.defaults);
    return await axios.post(url,data,headers)
}