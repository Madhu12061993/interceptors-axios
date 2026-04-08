import axios from "axios";

export const Intance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
    headers: {
        'Content-Type':'application/json',
        'Authorization':'Bearer auth_token'
    }
})
 

