<template>
  <a-layout-header>
    <div class="header">
      <a-button :href="`${$router.options.history.base}/`" class="logo" size="small" type="link"> 木昜 </a-button>
      <a-menu :selectedKeys="[`/${$route.path.split('/')[1]}`]" mode="horizontal" @click="click">
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/study">学习</a-menu-item>
        <a-menu-item key="/joy">娱乐</a-menu-item>
        <a-menu-item key="/resources">资源分享</a-menu-item>
        <a-menu-item key="/links">链接</a-menu-item>
        <a-menu-item key="/about">关于</a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
</template>

<script setup lang="jsx">
import { useRouter } from 'vue-router'
const router = useRouter()

const click = data => {
  router.push(data.key)
}
</script>

<style scoped lang="scss">
.ant-layout-header {
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-background);
  // background-image: radial-gradient(transparent 1px, var(--color-background) 1px);
  // background-size: 4px 4px;
  // backdrop-filter: saturate(50%) blur(4px);

  .header {
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1080px) {
    .header {
      width: 1080px;
    }
  }
}

.ant-menu {
  max-width: calc(100% - 120px);
  background: transparent;
  // border-color: var(--color-background-soft);

  // :deep(.ant-menu-title-content) {
  //   background: var(--color-background);
  //   color: var(--color-text);
  // }
}

.logo {
  width: 120px;
  min-width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: var(--color-background-mute);
  color: var(--color-text);
  line-height: 32px;
  text-align: center;
}
</style>
