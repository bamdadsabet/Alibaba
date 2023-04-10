//axios configuration
import Axios from 'axios'
const instance  =  Axios.create({
baseURL: 'https://restcountries.com/v3.1/',
responseType: 'json',
timeout: 50000
})
const axios = instance;
export { axios }