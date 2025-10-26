import axios from 'axios'

const BASE_URL = 'https://take-home-test-api.nutech-integrasi.com';


async function get(path, useAuth=false, params={}) {
  const config = {
    params: params
  };

  if (useAuth) {
    const session = JSON.parse(localStorage.getItem("session"));
    config.headers = {
      Authorization: `Bearer ${session?.token}`,
    };
  }  
  return await axios.get(BASE_URL + path, config)
}

async function post(path, payload, useAuth=false) {
    const config = {};

    if (useAuth) {
    const session = JSON.parse(localStorage.getItem("session"));
    config.headers = {
      Authorization: `Bearer ${session?.token}`,
    };
  }  
  return await axios.post(BASE_URL + path, payload, config)
}

async function put(path, payload, useAuth=false) {
    const config = {};

    if (useAuth) {
    const session = JSON.parse(localStorage.getItem("session"));
    config.headers = {
      Authorization: `Bearer ${session?.token}`,
    };
  }  
  return await axios.put(BASE_URL + path, payload, config)
}




export { post, get, put }