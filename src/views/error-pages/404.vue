<template>
  <div class="result">
    <a-result status="404" title="404" sub-title="此页面未找到。">
      <template #extra>
        <a-button type="primary" @click="back">Back</a-button>
        <a-button type="primary" @click="home">Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup lang="jsx">
import router from '@/router'

const back = () => {
  router.back()
}
const home = () => {
  router.push('/')
}
</script>

<style scoped lang="scss"></style>
