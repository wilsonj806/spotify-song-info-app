<template>
<main>
  <MainForm
    :should-disable='hasErrors'
    @callChangeHandler='onEmitInputChange'
    @callSubmitHandler='submitForm'/>
  <p>{{songUrl}}</p>
</main>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
          songUrl: '',
          artistData: null,
          errors: []
      }
    },
    computed: {
      hasErrors() {
        return this.errors.length > 0 || this.songUrl.length === 0
      }
    },
    methods: {
      async submitForm() {
        await axios.post('http://localhost:3000/songinfo',{songUrl: this.songUrl})
          .then(res => {
            this.artistData = res.json()
            })
          .catch(e => {
            console.dir(e)
            this.errors.push(e)
          })
      },
      onEmitInputChange(value) {
        this.songUrl = value
      }
    }
}
</script>
