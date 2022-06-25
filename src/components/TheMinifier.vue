<template>
  <div class="minifier__wrapper">
    <header class="minifier__intro mb-5">
      <h1 class="h3 text-center">CSS Minifier</h1>
      <p class="text-center">A simple CSS minifier to removes the spacing, indentation, newlines, and comments.</p>
    </header>

    <form class="minifier__form">
      <div class="form-group mb-2">
        <label for="input">Your CSS</label>
        <textarea class="form-control" id="input" rows="8" v-model="input"></textarea>
      </div>
      <div class="form-group mb-4">
        <label for="output">Compressed CSS</label>
        <input id="output" class="form-control" v-model="output" readonly />
      </div>
      <button @click="minifyCss" class="btn btn-primary btn-minify">Minify CSS</button>
      <!-- <button v-if="output.length" @click="copyCss" class="btn btn-secondary btn-copy">Copy CSS</button> -->
      <CopyButton :output="output" v-if="output.length" />
      <ClearButton :output="output" v-if="output.length" />
    </form>
  </div>
</template>

<script>
import * as CleanCSS from 'clean-css'
import CopyButton from './CopyButton.vue'
import ClearButton from './ClearButton.vue'

export default {
  name: 'TheMinifier',
  components: {
    CopyButton,
    ClearButton,
  },
  data() {
    return {
      input: '',
      output: '',
    }
  },
  methods: {
    minifyCss(e) {
      e.preventDefault()

      if (this.input === '') {
        alert('No CSS code found!')
        return
      }

      const { errors, styles, warnings } = new CleanCSS().minify(this.input)

      if (errors.length > 0 || warnings.length > 0) {
        alert('Error!')
        return
      }

      this.output = styles
    },
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
}
</style>
