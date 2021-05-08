<!--
 * @Author: czj
 * @Date: 2021-05-08 11:32:25
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 17:50:29
 * @Description:
-->
<template>
  <Loading/>
  <div class="fixed-content">
    <Hub/>
    <Repos/>
  </div>
  <Pagefooter/>
</template>

<script>
import Hub from '@/components/Hub.vue'
import Repos from '@/components/Repos.vue'
import Pagefooter from '@/components/Pagefooter.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'App',
  components: {
    Hub,
    Repos,
    Pagefooter,
    Loading
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
.tabs .tab {
  line-height: 22px !important;
  padding-top: 11px !important;
}
.fixed-content {
  min-height: calc(100vh - 190px);
}
</style>
