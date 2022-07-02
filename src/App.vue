<template>
  <NavBar :title="siteName" />
  <Minifier :title="siteName" />
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Minifier from './components/Minifier.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Minifier,
    },
    data() {
      return {
        siteName: 'CSS Minifier',
      }
    },
  }
</script>

<style lang="scss"></style>
