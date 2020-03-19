import axios from 'axios'

export function douban_api(config) {
  const douban_instance = axios.create({
    baseURL: '/douban_api',
    // baseURL: 'https://movie.douban.com',
    timeout: 5000
  })

  return douban_instance(config)
}
