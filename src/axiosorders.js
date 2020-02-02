import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-7e15b.firebaseio.com/'
})

export default instance
