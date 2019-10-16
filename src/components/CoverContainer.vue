<template>
  <div class="cover-container">
    <div class="title">{{ cover.title }}</div>
    <div class="cover-image">
      <img :src="url(cover.path)" />
    </div>
    <div class="info">
      <div>{{cover.category}}</div>
      <div>{{cover.length}} pages</div>
    </div>
  </div>
</template>

<script lang="ts">
import urljoin from "url-join";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Cover } from "@models";
import { IMAGE_PROXY, IMAGE_HOST } from "../config";

@Component
export default class CoverContainer extends Vue {
  @Prop() cover!: Cover;

  url(path: string) {
    return urljoin(IMAGE_PROXY, "300x285,fit", IMAGE_HOST, path);
  }
}
</script>

<style scoped>
.cover-container {
  min-height: 200px;
  flex-basis: 30%;
  border-right: 1px solid #6f6f6f4d;
  border-bottom: 1px solid #6f6f6f4d;
  min-width: 150px;
  max-width: 400px;
  background: #3c414b;
  margin: 5px;
}

.title {
  font-family: arial, helvetica, sans-serif;
  border-collapse: collapse;
  overflow: hidden;
  min-height: 32px;
  max-height: 32px;
  line-height: 16px;
  margin: 6px 4px 0;
  font-size: 10pt;
  text-align: center;
  color: #bbbbbb;
}

.cover-image {
  overflow: hidden;
  border-radius: 5px;
  margin: 3px auto 0;
  border: 1px solid #000000;
  height: 285px;
  width: fit-content;
  max-width: 200px;
}

.info {
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.info div {
  min-width: 60px;
  max-width: 110px;
  padding-right: 10px;
}
</style>