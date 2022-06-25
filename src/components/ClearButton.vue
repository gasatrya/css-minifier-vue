<template>
  <button @click="clearCss" class="btn btn-danger btn-clear">Clear CSS</button>
</template>

<script>
export default {
  name: 'ClearButton',
  props: ['output'],
  methods: {
    clearCss(e) {
      e.preventDefault()
      this.output = ''
    },
  },
}
</script>

<style></style>
