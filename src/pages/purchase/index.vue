<template>
  <div>
    <header class="header">
    <van-icon name="wap-home-o" size="30px"/> 
    <h2>值得买</h2>
    <p>
      <van-icon name="search"  size="30px"/>
      <van-icon name="cart-o"  size="30px"/>
    </p> 
    </header>
    <div class="con">
      <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
      <span class="span">值得买</span><span>严选好物生活</span>
      <div class="nav">
        <ul class="navlist">
          
            <li class="navlistItme" v-for="(list,index) in navList" :key="index">
              <a :href=list.columnUrl> 
              <div class="navlistItme_img">
                <img :src=list.picUrl alt="">
              </div>
              <div class="navlistItme_txt">
                <p class="p1text">{{list.mainTitle}}</p>
                <p class="p2text">{{list.viceTitle}}</p>
              </div>
              </a>
            </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "purchase",
  computed: {
    ...mapState({
      navList: state => state.purchase.navList
    })
  },
  mounted(){
    this.$store.dispatch('getrecManual')
    console.log(this.$store);
     console.log(this.navList);
    
    
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  height 40px
  padding 0 10px
  display flex
  justify-content space-between
  align-items center
  h2 
    font-size 20px
.con 
  width 100%
  height 1000px
  background-color #eee
  position relative
  img 
    width 100%
    height 200px
    z-index 1
  >span 
    position absolute
    z-index 3
    top 30px
    left 95px
    color #fff
    font-size 15px
  .span 
    left 25px
    top 20px
    font-size 22px
  .nav
    width 92%
    height 300px
    border-radius 20px
    overflow auto
    position absolute
    top 50px
    left 4%
    background-color #fff
    .navlist
      width 320%
      height 300px
      display flex
      flex-wrap wrap
      .navlistItme
        width 120px
        height 150px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .navlistItme_img
          width 80px
          height 80px
          text-align center
          line-height 80px
          img 
            width 70px
            height 70px
      .navlistItme_txt
        .p1text
          text-align center
          font-size 16px
        .p2text
          text-align center
          font-size 12px
          


</style>