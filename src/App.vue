<script>

import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  name: 'App',

  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
}


</script>

<template>
  <AppHeader></AppHeader>


  <!-- <AppMain></AppMain> -->
  <router-view></router-view>

  <AppFooter></AppFooter>
</template>

<style scoped></style>
