<template>
  <div>
    <div class="seach">
      <van-button class="logSeach">
        <van-icon name="search" size="0.18rem" />
        <span>搜索商品，共254615款好物</span>
      </van-button>
    </div>
    <ul class="list" v-for="item in items" :key="item.id">
      <li class="listItem">{{item.name}}</li>
      
    </ul>
  </div>
</template>
<script>
import {reqcateNavDatas} from '../../api'
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0,
      items:[]
    };
  },
  async  mounted () {
     
    const result = await reqcateNavDatas()
    if (result.code === 200) {
      this.items=result.data.categoryL1List
      console.log(this.items);
      
    }
  }
}
  
  

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.seach
  width 100%
  height 40px
  display flex
  justify-content center
  align-items center
  border-bottom 1px solid #ededed
  .logSeach
    width 90%
    height 30px
    background-color #ededed
    border-radius 5px
    display flex
    justify-content center
    align-items center
    span 
      vertical-align top
.list
  width 20%
  display flex
  flex-direction column
  border-right  1px solid #ededed 
  .listItem
    width 100%
    text-align center
    margin 12px 0
  .active
    border-left 3px solid #F00
    color #f00
</style>