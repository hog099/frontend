import axios from 'axios';


const api = axios.create({

    // baseURL: 'http://localhost:3333',
    baseURL: 'https://appgil.herokuapp.com',
    headers: {
        'Content-Type':'application/json'
    }

});

// api.interceptors.request.use(
//     async config => {
//         console.log("CONFIG", config);
//         return config;

//     },
//     error => {
//         console.log('Interc request error', error)
//     }

// );

// api.interceptors.response.use(response => {
//     console.log("interceptor", response);
//     return response
// },
//     error => {
//         console.log("Intercetor", error);
//         // return error.response
//     }
// );


export default api;