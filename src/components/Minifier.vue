<template>
  <div class="container gx-5">
    <header class="my-5">
      <h1 class="display-4 text-center fw-bold text-light">{{ title }}</h1>
      <p class="text-center fs-5 text-light text-opacity-75">
        A simple CSS minifier to removes the spacing, indentation, newlines, and comments. Built using
        <a href="https://vuejs.org/">Vue.js 3</a> & <a href="https://github.com/clean-css/clean-css">Clean CSS</a>
      </p>
    </header>

    <form class="my-5">
      <div class="mb-3">
        <label for="input" class="form-label fw-semibold">Your CSS</label>
        <textarea class="form-control text-light" id="input" rows="6" v-model="input"></textarea>
      </div>
      <div class="mb-3">
        <label for="output" class="form-label fw-semibold">Compressed CSS</label>
        <input id="output" class="form-control text-light" v-model="output" readonly />
      </div>
      <ul class="text-danger list-unstyled" v-if="warningMsgs.length">
        <li v-for="(msg, index) in warningMsgs" :key="index">
          {{ msg }}
        </li>
      </ul>
      <button @click.prevent="minifyCss" class="btn btn-custom fw-semibold me-2">Minify CSS</button>
      <button v-if="output.length" @click.prevent="copyCss" class="btn btn-secondary fw-semibold me-2">Copy CSS</button>
      <button v-if="output.length" @click.prevent="clearCss" class="btn btn-danger fw-semibold">Clear CSS</button>
    </form>
  </div>
</template>

<script>
  import * as CleanCSS from 'clean-css'
  import { ref } from 'vue'

  export default {
    // eslint-disable-next-line
    name: 'Minifier',
    props: ['title'],
    setup() {
      let input = ref('')
      let output = ref('')
      let warningMsgs = ref('')

      const minifyCss = () => {
        if (input.value === '') {
          alert('No CSS code found!')
          return
        }

        const { errors, styles, warnings } = new CleanCSS().minify(input.value)

        if (errors.length > 0) {
          alert('Please check again your CSS code!')
          return
        }

        if (warnings.length > 0) {
          warningMsgs.value = warnings
          output.value = ''
          return
        } else {
          warningMsgs.value = ''
        }

        output.value = styles
      }

      const copyCss = event => {
        navigator.clipboard.writeText(output.value).then(() => {
          event.target.textContent = 'Copied'

          setTimeout(() => {
            event.target.textContent = 'Copy CSS'
          }, 1500)
        })
      }

      const clearCss = () => {
        input.value = ''
        output.value = ''
      }

      return { input, output, minifyCss, copyCss, clearCss, warningMsgs }
    },
  }
</script>

<style lang="scss"></style>
