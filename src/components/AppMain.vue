<script>

import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',

    data() {
        return {

            apiURL: 'http://127.0.0.1:8000/api/projects',

            projects: [],

            pagination: {},
        }
    },

    components: {

        ProjectCard,
    },

    created() {
        this.getProjects(this.apiURL);
    },

    methods: {
        getProjects(apiUrl) {

            // link ottenuto dalla rotta in laravel
            // axios.get('http://127.0.0.1:8000/api/projects').then(response => {
            axios.get(apiUrl).then(response => {


                // il percoso giusto per ottenere solo l'array contenente i progetti lo ricavo controllando la console 
                // console.log(response.data.results);

                // this.projects = response.data.results;
                this.projects = response.data.results.data;

                // salvo anche le variabili per la paginazione
                this.pagination = response.data.results;
            })

        },
    },
}
</script>

<template>
    <div v-if="projects.length > 0" class="container pt-5">
        <h1>I progetti del mio portfolio</h1>

        <hr>

        <div class="row">
            <div v-for="project in projects" class="col-4">
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>


        <!-- <button @click="nextPage()" class="btn btn-primary">Next Page</button> -->



        <button v-for="link in pagination.links" class="btn" :class="link.active ? 'btn-primary' : 'btn-outline-secondary'"
            v-html="link.label" :disabled="link.url == null ? true : false" @click="getProjects(link.url)">
        </button>


    </div>

    <div v-else class="loading-screen">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
}
</style>