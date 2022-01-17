<template>
  <section>
    <h1></h1>
    <form>
      <label>Spotify song URL</label>
      <input type='text' @change='emitInputChange'>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    emitInputChange(e) {
      this.$emit('callChangeHandler',e.target.value)
    }
  }
}
</script>

<style>

</style>