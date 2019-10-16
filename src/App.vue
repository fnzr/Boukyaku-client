<template>
  <div id="app">
    <TopMenu />
    <Browser />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopMenu from "./components/TopMenu.vue";
import Browser from "./Browser.vue";

@Component({
  components: {
    TopMenu,
    Browser
  }
})
export default class App extends Vue {}
</script>

<style>
body {
  background: #34353b;
  margin: 0px;
}

#app {
  font-size: 8pt;
  font-family: arial, helvetica, sans-serif;
  color: #f1f1f1;
}
</style>
