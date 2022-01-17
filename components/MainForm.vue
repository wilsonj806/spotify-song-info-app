<template>
  <section>
    <h1></h1>
    <form>
      <label>Spotify song URL</label>
      <input type='text' @change='emitInputChange'>
      <button
        disabled='hasErrors'
        @click='emitSubmit'>
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