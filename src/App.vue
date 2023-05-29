<script>

import axios from 'axios';

export default {

  name: 'App',

  data() {
    return {

      projects: [],
    }
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {

      // link ottenuto dalla rotta in laravel
      axios.get('http://127.0.0.1:8000/api/projects').then(response => {

        // il percoso giusto per ottenere solo l'array contenente i progetti lo ricavo controllando la console 
        // console.log(response.data.results);

        this.projects = response.data.results;
      })

    }
  },
}


</script>

<template>
  <div class="container pt-5">
    <h1>I progetti del mio portfolio</h1>

    <hr>

  </div>
</template>

<style scoped></style>
