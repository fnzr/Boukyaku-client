<template>
  <div class="top-menu">
    <div>
      <a class="menu-item" href="#" @click="setBoxContent('download')">>Download</a>
    </div>
    <div>
      <a class="menu-item" href="#" @click="setBoxContent('filter')">>Filter</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopMenu extends Vue {
  setBoxContent(value: string) {
    if (this.$store.state.topBoxContent === value) {
      this.$store.mutations.setTopBoxContent("");
    } else {
      this.$store.mutations.setTopBoxContent(value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-menu {
  margin: auto;
  padding: 4px 10px 0;
  text-align: center;
  font-size: 10pt;
  font-weight: bold;
  color: #aaaaaa;
  white-space: nowrap;
  overflow: hidden;
  min-width: 630px;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  line-height: 19px;
  min-height: 19px;
  max-height: 19px;
}

.top-menu div {
  padding: 0 14px 0 7px;
}

.menu-item {
  text-decoration: none;
  font-weight: bold;
  color: #dddddd;
}
</style>
