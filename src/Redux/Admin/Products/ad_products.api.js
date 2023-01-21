// TODO: HERE WE ARE MAKING OUR API REQUESTS.
import axios from "axios"
export const products_success_request = async (keyVal) =>{
    const data = await axios.get(`http://localhost:8080/${keyVal}`)
    return data.data
}


