<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>
      <router-link to="/">
        <home-outlined />
      </router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) of menuList" :key="index">
      <template v-if="index === menuList.length - 1">{{ item.meta.title }}</template>
      <router-link v-if="index < menuList.length - 1" :to="item.path">
        {{ item.meta.title }}
      </router-link>
      <template v-if="overlayShow && index === menuList.length - 1 && menuList[index - 1]?.children?.length" #overlay>
        <a-menu>
          <template v-for="(ite, ind) of menuList[index - 1].children" :key="ind">
            <a-menu-item v-if="ite.path !== item.path">
              <router-link :to="ite.path">
                {{ ite.meta.title }}
              </router-link>
              <!-- <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a> -->
            </a-menu-item>
          </template>
        </a-menu>
      </template>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeOutlined } from '@ant-design/icons-vue'

const { overlayShow } = defineProps({ overlayShow: { type: Boolean, default: false } })

const $route = useRoute()

const menuList = computed(() => $route.matched)
</script>

<style lang="less" scoped>
@media (prefers-color-scheme: dark) {
  .ant-breadcrumb {
    a,
    :deep(.ant-breadcrumb-separator) {
      color: var(--color-text);
    }

    & > span:last-child {
      color: var(--color-heading);
    }
  }
}
</style>
