<template>
  <section>
    <h1></h1>
    <form @submit='emitSubmit'>
      <label>Spotify song URL</label>
      <input type='text' @keyup='emitInputChange'>
      <button
        :disabled='hasErrors'
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    hasErrors: {type: Boolean, default: false}
  },
  methods: {
    emitInputChange(e) {
      this.$emit('callChangeHandler',e.target.value)
    },
    emitSubmit(e) {
      e.preventDefault()
      this.$emit('callSubmitHandler',true)
    }
  }
}
</script>

<style>

</style>