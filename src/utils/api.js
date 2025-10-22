import axios from 'axios'

const BASE_URL = 'https://take-home-test-api.nutech-integrasi.com'


async function get(path) {
  return await axios.get(BASE_URL + path)
}

async function post(path, payload) {
  return await axios.post(BASE_URL + path, payload)
}



export { post, get }