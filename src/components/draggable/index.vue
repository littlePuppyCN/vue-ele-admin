<template>
  <div>
    <VueDragResize
      :is-active="false"
      :w="300"
    />
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
export default {
  name: 'Drag',
  components: {
    VueDragResize
  }
}
</script>

<style>

</style>
