<template>
  <div id="home">
    <HEADER />
    <ASIDE />
  </div>
</template>

<script>
import HEADER from '@/components/layout/Header.vue'
import ASIDE from '@/components/layout/Aside.vue'
export default {
  name: 'Home',
  components: {
    HEADER,
    ASIDE
  }
}
</script>

<style lang="less" scoped>
#home{
  width: 100%;
  height: 100%;
}
</style>
