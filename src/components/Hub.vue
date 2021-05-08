<!--
 * @Author: czj
 * @Date: 2021-05-08 13:35:19
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:23:09
 * @Description:
-->
<template functional>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">
            <img :src="person.avatar_url" />
            <div>{{ person.login }}</div>
          </span>
        </div>
        <div class="card-action">
          <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
          <div>repos: <span class="new badge red" data-badge-caption="">{{ person.public_repos }}</span></div>
          <div>gists: <span class="new badge red" data-badge-caption="">{{ person.public_gists }}</span></div>
          <div>followers: <span class="new badge red" data-badge-caption="">{{ person.followers }}</span></div>
          <div>following: <span class="new badge red" data-badge-caption="">{{ person.following }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { api } from "@/utils/index.js"

export default {
  name: "Hub",
  setup() {
    let person = ref({});
    api().then((res) => {
      person.value = res;
    });
    return {
      person,
    };
  },
};
</script>
