import axios from "axios"

/// common request no authorization
export const $host = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

/// adding token authorization 
export const $authHost = axios.create ({
    baseURL : process.env.REACT_APP_API_URL
})

$authHost.interceptors.request.use(function (config) {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return config
})