<template>
  <template v-if="props.url === $route.path">
    <slot></slot>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<script setup lang="jsx">
const props = defineProps({ url: String })
</script>

<style scoped lang="scss"></style>
