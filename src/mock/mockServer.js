import Mock from 'mockjs'
import cateLists from './cateLists.json'
import cateNavDatas from './cateNavDatas.json'
import home from './home.json'
import indexCateModule from './indexCateModule.json'
//分类右侧内容数据
Mock.mock('/mock/cateLists', {
  code: 200,
  message: '成功',
  data: cateLists
})
//分类左侧导航数据
Mock.mock('/mock/cateNavDatas', {
  code: 200,
  message: '成功',
  data: cateNavDatas
})
//主页推荐对应数据
Mock.mock('/mock/home', {
  code: 200,
  message: '成功',
  data: home
})
//a)主页nav对应模块数据
Mock.mock('/mock/indexCateModulets', {
  code: 200,
  message: '成功',
  data: indexCateModule
})