import axios from "axios"

// Allows us to create a request

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID P_FEf0IFbaAxGLjnPrczS2M7wt8eH35lHO-l7x9cBUk' }
})