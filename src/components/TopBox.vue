<template>
  <div class="top-box" v-if="this.topBoxContent !== ''">
    <div v-if="this.topBoxContent === 'filter'">
      <input id="filter" type="text" placeholder="Search Keywords" size="50" />
      <input class="btn" type="button" value="Apply Filter" />
      <input class="btn" type="button" value="Clear Filter" />
      <div>
        <p class="counter">Showing {{ count }} results</p>
      </div>
    </div>
    <div v-else-if="this.topBoxContent === 'download'">
      <input id="download" type="text" v-model="url" placeholder="Download URL" size="50" />
      <button class="btn" type="button" @click="downloadGallery()">Download</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBox extends Vue {
  url: string = "";

  get count() {
    return this.$store.state.galleryCount;
  }

  get topBoxContent() {
    return this.$store.state.topBoxContent;
  }

  downloadGallery() {
    this.$store.actions.downloadGallery(this.url).then(() => {
      this.url = "";
    });
  }
}
</script>

<style scoped>
.top-box {
  font-size: 8pt;
  font-family: arial, helvetica, sans-serif;
  color: #f1f1f1;
  width: 598px;
  border-collapse: collapse;
  margin: 0px auto 8px auto;
  padding: 5px;
  border: 2px ridge #3c3c3c;
  text-align: center;
}

::placeholder {
  color: #f1f1f1;
}

input {
  border-collapse: collapse;
  color: #f1f1f1;
  background-color: #34353b;
  line-height: 17px;
  border: 1px solid #8d8d8d;
  margin: 3px 1px 0;
  padding: 1px 3px 3px;
  border-radius: 3px;
}

.btn {
  border-collapse: collapse;
  color: #f1f1f1;
  background-color: #34353b;
  min-height: 26px;
  line-height: 20px;
  padding: 1px 5px 2px;
  margin: 0 2px;
  border: 2px solid #8d8d8d;
  border-radius: 3px;
  font-size: 9pt;
}
</style>
