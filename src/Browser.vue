<template>
  <div id="browser">
    <TopBox />
    <div style="display:flex;">
      <button @click="changePage(-1)" class="button-page">&lt;</button>
      <div class="gallery-container" @pointerdown="onPointerDown" @pointerup="onPointerUp">
        <CoverContainer v-for="(cover, i) in covers" :key="i" :cover="cover" />
      </div>
      <button @click="changePage(1)" class="button-page">&gt;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Cover } from "@models";
import TopMenu from "./components/TopMenu.vue";
import TopBox from "./components/TopBox.vue";
import CoverContainer from "./components/CoverContainer.vue";

@Component({
  components: {
    TopBox,
    CoverContainer
  }
})
export default class App extends Vue {
  count = 0;
  lastTouch = 0;
  isPressed = false;

  get covers() {
    return this.$store.state.covers;
  }

  beforeCreate() {
    this.$store.actions.getCovers(0);
    this.$store.actions.countGalleries();
  }

  changePage(value: number) {
    this.$store.actions.getCovers(this.$store.state.page + value);
  }

  onPointerDown(ev: PointerEvent) {
    this.isPressed = true;
    setTimeout(() => {
      if (this.isPressed) {
        this.isPressed = false;
        console.log("triggered");
      }
    }, 1000);
  }

  onPointerUp(ev: PointerEvent) {
    if (this.isPressed) {
      console.log(ev);
      this.isPressed = false;
    }
  }
}
</script>

<style>
.counter {
  font-size: 8pt;
  font-family: arial, helvetica, sans-serif;
  padding: 3px 1px;
  text-align: center;
}

.button-page {
  color: #f1f1f1;
  background-color: #34353b;
  height: inherit;
  width: 5%;
  margin: 0 2px;
  border: 2px solid #8d8d8d;
}

.gallery-container {
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 2px ridge #3c3c3c;
}

.pagination {
  font-family: arial, helvetica, sans-serif;
  text-align: justify;
  padding: 0px;
  border-collapse: collapse;
  clear: both;
  color: #f1f1f1;
  font-size: 10pt;
  margin: 2px auto 0px;
}

.pagination tbody {
  font-family: arial, helvetica, sans-serif;
  text-align: justify;
  border-collapse: collapse;
  color: #f1f1f1;
  font-size: 10pt;
}

.pagination td {
  font-family: arial, helvetica, sans-serif;
  border-collapse: collapse;
  font-size: 10pt;
  color: #c2a8a4 !important;
  text-align: center;
  height: 15px;
  width: 31px;
  background: #34353b;
  cursor: pointer;
  border: 1px solid #000000;
  border-bottom: 0;
}
</style>
