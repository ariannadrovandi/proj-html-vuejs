<template>
    <div class="container">
        <h2 class="text-uppercase fs-5 text-center mb-4">culinary collection</h2>
        <p class="text-center mt-4 mb-5">Aliquam erat volutpat. Ut quis liguala a magna blandit finibus. Suspendisse <br> maximus lacus non nunc lacinia lobortis</p>
        <div class="mt-5 d-flex justify-content-between d-flex flex-wrap flex-row">
            <CardCulinaryCollection class="ad-container" v-for="(item, index) in store.culinaryCollection" :key="item.id" :title="item.title" :credits="item.credits" :image="item.image"/>
        </div>
   </div>
</template>

<script>
import {store} from '../data/store';
    import CardCulinaryCollection from './CardCulinaryCollection.vue';
    export default{
        name: 'CulinaryCollection',
        components: {
            CardCulinaryCollection,
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .container{
        margin-top: 140px;
    }
</style>
