import axios from "axios";
import {Message} from 'element-ui'
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
        if (res.data.code == 200) {
            Message.success("成功");
        } else {
            Message.error(res.data.msg);
        }
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
          Message.error("系统繁忙，请稍后重试");
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
        if (res.data.code == 200) {
            Message.success("成功");
        } else {
            Message.error(res.data.msg);
        }
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
          Message.error("系统繁忙，请稍后重试");

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
        if (res.data.code == 200) {
          this.Message.success("成功");
        } else {
            Message.error(res.data.msg);
        }
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
        Message.error("系统繁忙，请稍后重试");

      })
  })
}

