<!--
 * @Author: czj
 * @Date: 2021-05-08 14:21:47
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 19:12:19
 * @Description:
-->
<template functional>
 <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>

  <ul class="collection row">
    <li class="collection-item col m6 s6" v-for="(item, index) in repos" :key="index">
      <!-- <i class="material-icons circle">aspect_ratio</i> -->
      <div>

        <span class="title">
          {{item.full_name}}
        </span>
        <p>
          <a href="#!" class="a-color"><i class="material-icons">remove_red_eye</i>{{item.watchers_count}}</a>

          <a href="#!" class="a-color"><i class="material-icons">star</i>{{item.forks}}</a>

          <a href="#!" class="a-color"><i class="material-icons">people</i>{{item.stargazers_count}}</a>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import { api } from "@/utils/index.js"

export default {
  name: "Hub",
  setup() {
    let repos = ref({})
    api("/repos").then((res) => {
      repos.value = res;
    })
    return {
      repos
    }
  }
}
</script>

<style>
  .a-color {
    color: rgba(0, 0, 0, 0.411);
    padding-right: 1em;
  }
</style>
