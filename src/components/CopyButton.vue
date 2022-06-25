<template>
  <button @click="copyCss" class="btn btn-secondary btn-copy">Copy CSS</button>
</template>

<script>
export default {
  name: 'CopyButton',
  props: ['output'],
  methods: {
    copyCss(e) {
      e.preventDefault()

      navigator.clipboard.writeText(this.output).then(() => {
        e.target.textContent = 'Copied'

        setTimeout(() => {
          e.target.textContent = 'Copy CSS'
        }, 1500)
      })
    },
  },
}
</script>

<style></style>
