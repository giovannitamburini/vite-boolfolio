<script>

// axios per fare la chiamata
import axios from 'axios';

export default {

    name: 'ProjectShow',

    data() {
        return {

            baseUrl: 'http://127.0.0.1:8000/api/projects/',

            baseUrlImg: 'http://127.0.0.1:8000/',

            projectSlug: '',

            project: {},

            isLoading: true,
            projectFound: false,
        }
    },

    mounted() {

        // facendo questo console.log trovo "params" dove ci sarà un parametro "slug" : nome dello slug, e parametro slug si chiama così perchè l'ho impostato così nella rotta (:slug)
        // console.log(this.$route);

        this.projectSlug = this.$route.params.slug;

        // console.log(this.projectSlug);

        this.getProject();
    },

    computed: {
        projectImg() {

            if (this.project.cover_image == null) {

                return 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png';

            } else {

                return this.baseUrlImg + 'storage/' + this.project.cover_image;
                // console.log(this.baseUrl + 'storage/' + this.project.cover_image);
            }


        }
    },

    methods: {

        getProject() {

            axios.get(this.baseUrl + this.projectSlug).then(response => {

                // "project:" è semplicemente un etichetta nella console
                // console.log('project:', response);

                // console.log(response.data.projects);

                this.isLoading = false;

                // caso in cui riceviamo un risultato in base a come abbiamo impostato nel backend nella rotta api
                if (response.data.success) {

                    this.project = response.data.projects;

                    console.log(this.project);

                    this.isLoading = false;
                    this.projectFound = true;
                } else {

                    this.projectFound = false;
                }

            });
        }
    }

}
</script>

<template>
    <div v-if="isLoading" class="loading-screen">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div v-else class="container pt-3">

        <!-- controllo se il progetto è stato trovato -->
        <div v-if="projectFound">

            <div class="my-project-img">
                <img :src="projectImg" alt="">
            </div>

            <h1 class="py-3">{{ project.title }}</h1>

            <h4>type: {{ project.type ? project.type.name : 'Nessuna' }}</h4>

            <div class="technologies">
                <span v-for="tech in project.technologies" class="badge rounded-pill"
                    :style="{ backgroundColor: tech.color }">{{ tech.name
                    }}</span>
            </div>

            <hr>

            <p>{{ project.content }}</p>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                Nessun progetto trovato
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
//dublicato identico nella projectsIndex, definire quindi la classe una sola volta nel scss
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
}

.technologies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;

    padding: 1em 0;

    overflow-x: scroll;
}
</style>