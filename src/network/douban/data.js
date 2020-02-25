import { douban_api } from './douban-api'

export function getData(tag,page_limit,page_start=0,type='movie') {
  return douban_api({
    url: '/j/search_subjects',
    params: {
      type,
      tag,
      page_limit,
      page_start  //用来分页，从第几条数据开始
    },
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}
