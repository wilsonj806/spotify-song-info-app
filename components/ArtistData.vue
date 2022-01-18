<template>
  <section>
    <h2>{{trackText}}</h2>
    <h3>Artists</h3>
    <p v-for='artist in artists' :key='artist'>{{artist}}</p>
  </section>
</template>

<script>
export default {
  props: {
    artists: {type: Array, default() {return []}},
    trackName: {type: String, default: ''}
  },
  computed: {
    trackText() { return `Track Name: ${this.trackName ? this.trackName : ''}`}
  }
}
</script>

<style>

</style>