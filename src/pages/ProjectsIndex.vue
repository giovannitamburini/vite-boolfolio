<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'ProjectsIndex',

    data() {
        return {
            apiURL: 'http://127.0.0.1:8000/api/projects',

            projects: [],

            types: [],

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

                this.types = response.data.allType;

                // salvo anche le variabili per la paginazione
                this.pagination = response.data.results;
            });

        },
    },
}
</script>

<template>
    <div class="container py-3">
        <div v-if="projects.length > 0" class="pt-5">
            <h1>I progetti del mio portfolio</h1>

            <form action="">
                <select name="type_id" id="type_id">
                    <option value="">Tutte</option>
                    <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
                </select>
            </form>

            <hr>

            <div class="row">
                <div v-for="project in projects" class="col-4">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>

            <!-- bottoni per la paginazione -->
            <button v-for="link in pagination.links" class="btn"
                :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" v-html="link.label"
                :disabled="link.url == null ? true : false" @click="getProjects(link.url)">
            </button>


        </div>

        <div v-else class="loading-screen">
            <div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
}
</style>