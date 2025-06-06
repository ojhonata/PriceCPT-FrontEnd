// instancia do axios
import Axios from 'axios';


//createAxios.get('/rota')
const createAxios = Axios.create({
    baseURL: "https://localhost:7180" //URL Back-end
})

export default createAxios;