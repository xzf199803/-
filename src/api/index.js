import mockAjax from './mockAjax'
//分类右侧内容数据
export const reqcateLists = () => mockAjax.get('/cateLists')
//分类左侧导航数据
export const reqcateNavDatas = () => mockAjax.get('/cateNavDatas')
//主页推荐对应数据
export const reqhome = () => mockAjax.get('/home')
//a)主页nav对应模块数据
export const reqindexCateModule = () => mockAjax.get('/indexCateModule')

reqcateNavDatas().then((result) => {
  console.log(result)
})