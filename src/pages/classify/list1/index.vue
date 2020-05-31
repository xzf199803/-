<template>
<div>
  <div class="listimg" v-for="item in list" :key=item.id>
      <img :src=item.bannerUrl alt="">
      <ul class="listimg_item">
        <li class="listItem_item">
          <img :src=item.categoryList.bannerUrl alt="">
          <p>{{item.categoryList.name}}</p>
        </li>    
      </ul>
  </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'list1',
  computed: {
    ...mapState({
      list: state => state.classify.list
    })
  },
  mounted(){
    this.$store.dispatch('getcateLists')
    console.log(this.$store);
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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