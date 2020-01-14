import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //2-1.请求拦截
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      //请求发生错误
    }
  )

  //2-2.响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      //响应发生错误
    }
  )

  //3.发送真正的网络请求
  return instance(config)
}
