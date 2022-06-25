<template>
  <header class="minifier__header mb-5">
    <div class="container">
      <div class="row">
        <div class="minifier__logo text-sm-left col-md-6 col-12">{{ title }}</div>
        <div class="minifier__social text-sm-right text-md-center col-md-6 col-12">
          <a href="https://github.com/gasatrya/css-minifier">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ededed" class="nc-icon-wrapper">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                  ></path>
                </g>
              </g>
            </svg>
            Github
          </a>

          <a href="https://twitter.com/gasatrya/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ededed" class="nc-icon-wrapper">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                  ></path>
                </g>
              </g>
            </svg>
            Twitter
          </a>

          <a href="https://www.linkedin.com/in/gasatrya/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ededed" class="nc-icon-wrapper">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill-rule="nonzero"
                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                  ></path>
                </g>
              </g>
            </svg>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['title'],
}
</script>

<style lang="scss">
.minifier {
  &__header {
    background-color: var(--accent-color);
    color: var(--white-color);
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;

    @media (min-width: 567px) {
      height: 50px;
      text-align: left;
    }
  }

  &__logo {
    margin-bottom: 10px;

    @media (min-width: 567px) {
      margin-bottom: 0;
    }
  }

  &__social {
    display: flex;
    justify-content: center;

    @media (min-width: 567px) {
      justify-content: flex-end;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: var(--white-color);
      font-size: 14px;
      text-decoration: none;

      &:not(:last-of-type) {
        margin-right: 14px;
      }

      &:hover {
        color: inherit;
      }
    }

    svg {
      width: 24px;
      margin-right: 5px;
    }
  }
}
</style>
