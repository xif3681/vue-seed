import axios from 'axios'
import { host , bookWeb} from './hostConfig'

axios.defaults.baseURL = host
// axios.defaults.timeout = 1000 * 60 * 60 * 24;

axios.defaults.timeout = 1000 * 10



axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

const baseRequest = (config) => {
  return axios.request(config)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.debug('axios error: ', error.message)
      return Promise.reject(error)
    })
}

export default {
  get(url, params, config) {
    return baseRequest({
      method: 'get',
      params,
      url,
      ...config
    })
  },
  post(url, data, config) {
    return baseRequest({
      data,
      method: 'post',
      url,
      ...config
    })
  },
  patch(url, data, config) {
    return baseRequest({
      data,
      method: 'patch',
      url,
      ...config
    })
  },
  put(url, data, config) {
    return baseRequest({
      data,
      method: 'put',
      url,
      ...config
    })
  },
  delete(url, data, config) {
    return baseRequest({
      data,
      method: 'delete',
      url,
      ...config
    })
  },
  javaGet (url, params, config) {
    return baseRequest({
      method: 'get',
      params,
      baseURL: `${bookWeb}`,
      url,
      ...config
    })
  },
  javaPost (url, data, config) {
    return baseRequest({
      data,
      method: 'post',
      baseURL: `${bookWeb}`,
      url,
      ...config
    })
  },
}
