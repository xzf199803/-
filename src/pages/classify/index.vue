<template>
  <div>
    <div class="seach">
      <van-button class="logSeach">
        <van-icon name="search" size="0.18rem" />
        <span>搜索商品，共254615款好物</span>
      </van-button>
    </div>
      <div class="con" >
        <ul class="list" @touchstart=tologo v-for="item1 in items" :key="item1.id">
          <li class="listItem" :data-category1Id="item1.id">
            <router-link :to="`/classify/list1/${item1.id}`"> {{item1.name}}</router-link>
           
          </li>
        </ul>
    </div> 
  </div>
</template>
<script>
//import {reqcateNavDatas} from '../../api'
import {mapState} from 'vuex'
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0,
      isfals:false
    };
  },
  computed: {
    ...mapState({
      items: state => state.classify.items
    })
  },
  mounted () {

     
    // const result = await reqcateNavDatas()
    // if (result.code === 200) {
    //   this.items=result.data.categoryL1List
    //   console.log(this.items);
      
    // }
     this.$store.dispatch('getcateNavDatas')
     console.log(this.$store);
     
     
     
     
     
     
  },
   methods: {
   
      tologo(){
        // console.log(this.items);
        // console.log(id);
        
       
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
.con
  position relative
  .list
    width 20%
    height 100%
    // float left 
    display flex
    flex-direction column-reverse
    border-right  1px solid #ededed 
    z-index 10
    .listItem
      width 100%
      height 100%
      text-align center
      margin 14px 0
    .active
      border-left 3px solid #F00
      color #f00
  .listimg
    display none
    position absolute
    top 15px
    left 15%
    >img 
      margin-left 40px
      width 80%
      height 100px
    .listimg_item
      margin-left 40px
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      .listItem_item
        width 30%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center 
        >img 
          width 100%
          height 100px
        >p
          width 70%
          
</style>