<!--
 * @Author: czj
 * @Date: 2021-05-08 13:35:19
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 19:09:34
 * @Description:
-->
<template functional>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"
        ><i class="material-icons">cloud</i>Github</a
      >
    </div>
  </nav>
  <div class="row">
    <div class="col s12 m12">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title avatar">
            <img :src="person.avatar_url" class="circle img-height" />
            <div>{{ person.login }}</div>
          </span>
          <!-- <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a> -->
        </div>
        <div class="card-action">
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab center">
                <a class="grey-text text-lighten-4">
                  <span class="badge-w red" data-badge-caption="">{{
                    person.public_repos
                  }}</span>
                  <div>
                    repos
                  </div>
                </a>
              </li>
              <li class="tab center">
                <a class="grey-text text-lighten-4">
                  <span class="badge-w red" data-badge-caption="">{{
                    person.public_gists
                  }}</span>
                  <div>
                    gists
                  </div>
                </a>
              </li>
              <li class="tab center">
                <a class="grey-text text-lighten-4">
                  <span class="badge-w red" data-badge-caption="">{{
                    person.followers
                  }}</span>
                  <div>
                    followers
                  </div>
                </a>
              </li>
              <li class="tab center">
                <a class="grey-text text-lighten-4">
                  <span class="badge-w red" data-badge-caption="">{{
                    person.following
                  }}</span>
                  <div>
                    following
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { api } from "@/utils/index.js";

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

<style>
  .img-height {
    height: 112px;
  }

  .badge-w {
    width: 2rem;
    display: block;
    margin: auto;
  }
</style>
