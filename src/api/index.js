import axios from "axios";
import Router from "../router";

// const baseUrl = import.meta.BACKEND_BASEURL //|| "http://localhost:5050";
const baseUrl =  "http://localhost:5050";
export let token = () => {
    // return localStorage.getItem("token");
};

axios.defaults.baseURL = baseUrl;

// axios.interceptors.request.use(async (config) => {
//     config.headers.Authorization =
//         "Bearer " + ( localStorage.getItem("token"));
//     
//     return config;
// });

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {

        if (error.response.status == 422 || error.response.status == 400) {
            let message = error.response.data.errors;
            for (const key in message) {
                console.log("error",{title: message[key]});
            }
        }

        if (error.response.status == 401) {
            // localStorage.removeItem("token");
            // Router.push({ name: "login" });
        }
        if (error.response.status == 500) {
            Router.push({ name: "ServerError" });
        }
        return Promise.reject(error);
    }
);

export default axios;
