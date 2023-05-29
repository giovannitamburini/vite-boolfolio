<script>

import axios from 'axios';

export default {
    name: 'ProjectCard',

    data() {
        return {

            baseUrl: 'http://127.0.0.1:8000/',

        }
    },

    props: {
        project: Object,
    },

    computed: {
        // funzione per ridurre a 50 caratteri il contenuto di project nel caso in cui sia maggiore di 50 caratteri
        shortContent() {

            if (this.project.content.length > 50) {

                // caso in cui supera i 50 caratteri
                return this.project.content.substring(0, 50) + '...'
            } else {

                // caso in cui non supera 50 caratteri
                return this.project.content
            }

        },

        coverImage() {

            return 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Vue-Blog-Cover-2.png';

            // if (this.project.cover_image != 'null') {

            // } else {

            //     return this.baseUrl + 'storage/' + this.project.cover_image;
            // }


        }
    },
}
</script>

<template>
    <div class="card mb-3 my-card">
        <img :src="coverImage" class="card-img-top my-cover-image" alt="">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>

            <small>Tipologia: {{ project.type ? project.type.name : 'nessuna' }}</small>

            <div class="technologies">
                <span v-for="tech in project.technologies" class="badge rounded-pill"
                    :style="{ backgroundColor: tech.color }">{{ tech.name
                    }}</span>
            </div>

            <p class="card-text ">{{ shortContent }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Slug: {{ project.slug }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.my-card {
    .my-cover-image {

        height: 200px;
        object-fit: cover;
        object-position: center;
    }

    .technologies {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5em;

        padding: 1em 0;

        overflow-x: scroll;
    }
}
</style>