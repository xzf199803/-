<template>
  <div>
    <div class="con">
      <div class="titimg">
        <p></p>
      </div>
      <ul class="list">
        <li class="listItme">
          <p></p>
          <p></p>  
        </li> 
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "purchase"
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.con
  float right 
  width 70%
  padding 15px
  .titimg
    width 100%
    height 100px
    background-color #ccc
  .list
    display flex
    flex-wrap wrap
    .listItme
      width 29%
      height 100px
      background-color #eee
      margin-right 10px
      margin-bottom  10px
</style>