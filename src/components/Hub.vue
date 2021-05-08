<template functional>
  <img :src="person.avatar_url" />
  <div>{{person.login}}</div>
  <div>{{person.public_repos}}</div>
  <div>{{person.public_gists}}</div>
  <div>{{person.followers}}</div>
  <div>{{person.following}}</div>

</template>
<script>
import { ref } from 'vue'
import { api } from "@/utils/index.js"
export default {
  name: "Hub",
  setup() {
    let person = ref({})
    api().then((res) => {
      person.value = res;
    })
    return {
      person
    }
  }
}
</script>
