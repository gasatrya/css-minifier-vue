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

<style lang="scss">
  :root {
    --accent-color: #6d68ad;
    --white-color: #fff;
    --font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  #app {
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    margin-bottom: 5rem;
  }
</style>
