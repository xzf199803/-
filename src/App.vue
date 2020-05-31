<template>
  <div>
    <Header />
    <router-view />
    <tab />
  </div>
</template>

<script>
import Header from './components/Head'
import tab from './components/tab'
export default {
  name: "App",
  components: {
    Header,
    tab
  },
   mounted () {
    
    
   }

};
</script>

<style lang="stylus"></style>
