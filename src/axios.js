import Axios from "axios"

const instance=Axios.create({
    baseURL:"https://protfolio11-backend.vercel.app"
})


export default instance;