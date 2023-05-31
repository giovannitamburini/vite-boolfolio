<script>
export default {

    name: 'ProjectShow',

    data() {
        return {
            projectSlug: '',
        }
    },

    mounted() {

        // facendo questo console.log trovo "params" dove ci sarà un parametro "slug" : nome dello slug, e parametro slug si chiama così perchè l'ho impostato così nella rotta (:slug)
        // console.log(this.$route);

        this.projectSlug = this.$route.params.slug;

        console.log(this.projectSlug);
    }

}
</script>

<template>
    <div class="container pt-3">
        <h1>Show</h1>
    </div>
</template>

<style lang="scss" scoped></style>