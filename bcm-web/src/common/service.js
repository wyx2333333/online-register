import axios from './http'
// 发送get请求(返回一个Promise)
const get = (url, param, showLoading, loadingText) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
        showLoading: showLoading,
        loadingText: loadingText
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// 发送post请求(返回一个Promise)
const post = (url, params, showLoading, loadingText, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: headers,
        showLoading: showLoading,
        loadingText: loadingText
      })
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

// 登录
const login = (
  { username, password },
  showLoading = true,
  loadingText = '正在登录'
) => {
  return post('/login', null, showLoading, loadingText, {
    username: username,
    password: password
  })
}

// 获取注册码
const getRegistrationCode = (
  params,
  showLoading = true,
  loadingText = '正在获取注册码'
) => {
  return post('/registrationCode', params, showLoading, loadingText, {
    Authorization: sessionStorage.getItem('token')
  })
}

export default {
  login,
  getRegistrationCode
}
