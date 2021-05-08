<!--
 * @Author: czj
 * @Date: 2021-05-08 11:32:25
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 14:23:48
 * @Description:
-->
<template>
  <Hub/>
  <Repos/>
</template>

<script>
import Hub from '@/components/Hub.vue'
import Repos from '@/components/Repos.vue'

export default {
  name: 'App',
  components: {
    Hub,
    Repos
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
  margin-top: 60px;
}
</style>
