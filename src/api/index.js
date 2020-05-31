import mockAjax from './mockAjax'
import ajax from './ajax'
//分类右侧内容数据
export const reqcateLists = () => mockAjax.get('/cateLists')
//分类左侧导航数据
export const reqcateNavDatas = () => mockAjax.get('/cateNavDatas')
//主页推荐对应数据
export const reqhome = () => mockAjax.get('/home')
//a)主页nav对应模块数据
export const reqindexCateModule = () => mockAjax.get('/indexCateModule')
export const reqrecManual = ()=>ajax.get('topic/v1/know/navWap.json')
reqrecManual().then((result) => {
  console.log(result)
})