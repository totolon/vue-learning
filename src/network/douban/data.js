import { douban_api } from './douban-api'

export function getData({ tag, page_limit, page_start, type, sort }) {
  return douban_api({
    url: '/j/search_subjects',
    params: {
      type,        //类型
      tag,          //标签
      page_limit,  //限制每页多少条数据
      page_start,  //用来分页，从第几条数据开始
      sort
    },
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}
