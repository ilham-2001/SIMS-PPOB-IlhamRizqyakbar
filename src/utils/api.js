import axios from 'axios'

const BASE_URL = 'https://take-home-test-api.nutech-integrasi.com';


async function get(path, useAuth=false) {
  const config = {};

  if (useAuth) {
    const session = JSON.parse(localStorage.getItem("session"));
    config.headers = {
      Authorization: `Bearer ${session?.token}`,
    };
  }  
  return await axios.get(BASE_URL + path, config)
}

async function post(path, payload) {
  return await axios.post(BASE_URL + path, payload)
}



export { post, get }