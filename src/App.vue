<!--
 * @Author: czj
 * @Date: 2021-05-08 11:32:25
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 15:33:04
 * @Description:
-->
<template>
  <Loading/>
  <Hub/>
  <Repos/>
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
</style>
