import axios from "axios";
const http = axios.create({
    baseURL:'https://dog.ceo',
    timeout:5000
})

// axios 请求拦截器
http.interceptors.request.use(config => {
    return config
},e=>Promise.reject(e))

// axios 响应拦截器
http.interceptors.response.use(res => res.data,e=>{
    return Promise.reject(e)
})

export default http