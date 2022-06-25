<template>
  <button @click="clearCss" class="btn btn-danger btn-clear">Clear CSS</button>
</template>

<script>
export default {
  name: 'ClearButton',
  props: ['output'],
  data() {
    return {
      clear: this.output,
    }
  },
  methods: {
    clearCss(e) {
      e.preventDefault()
      this.clear.reset()
    },
  },
}
</script>

<style></style>
