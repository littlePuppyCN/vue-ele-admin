<template>
  <div>
    <div id="emit" @click="tof">emit</div>
    {{ fa }}
  </div>
</template>

<script>
export default {
  props: {
    fa: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      date: Date.now()
    }
  },
  methods: {
    tof() {
      this.$emit('recieve', this.date)
    }

  }
}
</script>

<style>

</style>
