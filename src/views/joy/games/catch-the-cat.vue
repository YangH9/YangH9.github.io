<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <div id="catchTheCat"></div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import 'phaser'
import '@/utils/catch-the-cat'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // eslint-disable-next-line no-undef
  window.game = new CatchTheCatGame({
    w: 20,
    h: 20,
    r: 20,
    backgroundColor: 16777215,
    parent: 'catchTheCat',
    statusBarAlign: 'center',
    credit: 'YangH9.github.io'
  })
})
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}

#catchTheCat {
  display: inline-block;
}
</style>
