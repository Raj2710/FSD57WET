import axios from 'axios'
import useLogout from '../hooks/useLogout'

const AxiosService = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

AxiosService.interceptors.request.use(config=>{
    let token = sessionStorage.getItem('token')

    if(token && config.authenticate)
        config.headers.Authorization = `Bearer ${token}`
    return config
},error=>Promise.reject(error))


AxiosService.interceptors.response.use(response=>{
    return response.data
},error=>{
    const {response} = error
    console.log(error)
    if(response.status===401)
    {
        window.location.assign('/login')
    }
    else
       throw response.data
})

export default AxiosService