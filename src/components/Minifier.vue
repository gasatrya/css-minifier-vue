<template>
  <div class="minifier__wrapper">
    <header class="minifier__intro mb-5">
      <h1 class="h3 text-center">{{ title }}</h1>
      <p class="text-center">
        A simple CSS minifier to removes the spacing, indentation, newlines, and comments. Built using
        <a href="https://vuejs.org/">Vue.js 3</a> & <a href="https://github.com/clean-css/clean-css">Clean CSS</a>
      </p>
    </header>

    <form class="minifier__form">
      <div class="form-group mb-2">
        <label for="input">Your CSS</label>
        <textarea class="form-control" id="input" rows="6" v-model="input"></textarea>
      </div>
      <div class="form-group mb-4">
        <label for="output">Compressed CSS</label>
        <input id="output" class="form-control" v-model="output" readonly />
      </div>
      <ul class="text-danger minifier__warning" v-if="warningMsgs.length">
        <li v-for="(msg, index) in warningMsgs" :key="index">
          {{ msg }}
        </li>
      </ul>
      <button @click.prevent="minifyCss" class="btn btn-primary btn-minify">Minify CSS</button>
      <button v-if="output.length" @click.prevent="copyCss" class="btn btn-secondary btn-copy">Copy CSS</button>
      <button v-if="output.length" @click.prevent="clearCss" class="btn btn-danger btn-clear">Clear CSS</button>
    </form>
  </div>
</template>

<script>
  import * as CleanCSS from 'clean-css'
  import { ref } from 'vue'

  export default {
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
          return
        } else {
          warningMsgs.value = ''
        }

        output.value = styles
      }

      const copyCss = (event) => {
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

<style lang="scss">
  .minifier {
    &__wrapper {
      width: 100%;
      max-width: 800px;
      margin: auto;
    }

    .h3 {
      font-weight: 700;
    }

    label {
      font-weight: 700;
      font-size: 0.9rem;
    }

    .btn-primary {
      background-color: var(--accent-color);
      border-color: var(--accent-color);
    }

    .btn-primary:hover,
    .btn-primary:focus,
    .btn-primary:not(:disabled, .disabled):active {
      background-color: rgb(109 104 173 / 80%);
      border-color: var(--accent-color);
    }

    .btn {
      margin-right: 0.5rem;
    }

    #invalid {
      display: none;
      color: #d54552;
      font-weight: 700;
      margin-top: 0.5rem;
      font-size: 1rem;
    }

    textarea {
      resize: none;
    }

    &__warning {
      font-size: 1rem;
      padding-left: 1rem;
      li {
        padding: 2px 0;
      }
    }
  }
</style>
