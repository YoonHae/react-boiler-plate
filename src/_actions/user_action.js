import axios from 'axios'
import {
    LOGIN_USER,
    AUTH_USER
} from './types';



export function loginUser(dataToSumit) {
    const request = axios.post('/auth/login', dataToSumit)
        .then (response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}


export function auth() {
    const request = axios.get('/api/users/auth')
        .then (response => response.data)

    console.log(request);
    return {
        type: AUTH_USER,
        payload: request
    }
}