<script>
export default {
    name: 'AppHome',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container pt-3">
        <div>
            <router-link :to="{ name: 'about' }">Informazioni personali</router-link>
        </div>
        <div>
            <router-link :to="{ name: 'projects.index' }">Progetti</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>