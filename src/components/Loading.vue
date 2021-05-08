<!--
 * @Author: czj
 * @Date: 2021-05-08 15:29:40
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:43:44
 * @Description:
-->

<template functional>
  <div class="progress" v-show="show">
    <div class="indeterminate"></div>
  </div>
</template>

<script>
import { useStore } from "@/store"

export default {
  name: "Loading",
  setup() {
    const store = useStore();

    return {
      show: store.state.show
    }
  }
}
</script>
