<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item name="classify" to="/classify" icon="coupon-o">分类</van-tabbar-item>
    <van-tabbar-item name="purchase" to="/purchase" icon="photo-o">值得买</van-tabbar-item>
    <van-tabbar-item name="shopping" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item name="personage" icon="contact">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'tab',
  data () {
    return {
      active: 'home',
    };
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>