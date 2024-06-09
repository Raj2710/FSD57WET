import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://66371215288fedf6937f559e.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService