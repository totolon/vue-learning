import axios from 'axios'

export function api(config) {
  const api_instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  return api_instance(config)
}

export function getApiData(start=0,count=10) {
  return api({
    url: '/v2/movie/in_theaters',
    params: {
      apikey: '0df993c66c0c636e29ecbb5344252a4a',
      start,      //从第几条开始
      count     //总共条数
    }
  })
}
