import axios from "axios";


const instance = axios.create({
    baseURL: "https://parfume-deploy-1.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    },
})

export {instance}