<!--
 * @Author: czj
 * @Date: 2021-05-08 14:21:47
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:19:54
 * @Description:
-->
<template functional>
  <div></div>
  <div v-for="(item, index) in repos" :key="index">
    <div>
      {{item.full_name}}
    </div>
    <div>
      {{item.stargazers_count}}
      {{item.watchers_count}}
      {{item.forks}}
    </div>
  </div>
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
