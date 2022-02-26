import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8888/',
  timeout: 60 * 1000 * 5,
  headers: {}
})


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    http.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function jsonpost(url, params) {
  return new Promise((resolve, reject) => {
    http.defaults.headers['Content-Type'] = 'application/json;'

    http.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export function jsonget(url, params) {
  return new Promise((resolve, reject) => {
    http.defaults.headers['Content-Type'] = 'application/json;'
    http.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

