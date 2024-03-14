import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://devapi.wollette.com',
})

export default instance
