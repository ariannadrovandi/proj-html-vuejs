<template>
    <div class="container">
        <h2 class="text-uppercase fs-5 text-center mb-4">popular recipes</h2>
        <p class="text-center mt-4 mb-5">Aliquam erat volutpat. Ut quis liguala a magna blandit finibus. Suspendisse <br> maximus lacus non nunc lacinia lobortis</p>
        <div class="mt-5 d-flex justify-content-between">
            <MPRLeft/>
            <div class="ad-width d-flex flex-row flex-wrap">
                <MPRRight class="ad-container " v-for="(item, index) in store.popularRecipes" :img="item.img"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    import MPRLeft from './MPRLeft.vue';
    import MPRRight from './MPRRight.vue';
    export default {
        name: 'PopularRecipes',
        components:{
            MPRLeft,
            MPRRight
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
        margin-top: 40px;
        color: $black;
        background-color: $light-gray;
    }
    h2{
        font-size: 16px;
    }
    p{
        font-weight: 300;
        font-size: 16px;
    }
    .ad-width{
        width: 50%;
    }
    .ad-container{
        width: 50%;
        border: 1px solid $black;
    }
</style>
