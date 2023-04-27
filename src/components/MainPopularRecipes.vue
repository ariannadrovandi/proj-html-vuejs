<template>
    <div class="container">
        <h2 class="text-uppercase text-center mb-4">popular recipes</h2>
        <p class="text-center mt-4 mb-5">Aliquam erat volutpat. Ut quis liguala a magna blandit finibus. Suspendisse <br> maximus lacus non nunc lacinia lobortis</p>
        <div class="mt-5">
            <MPRLeft/>
            <MPRRight/>
        </div>
    </div>
</template>

<script>
    import MPRLeft from './MPRLeft.vue';
    import MPRRight from './MPRRight.vue';
    export default {
        name: 'MainPopularRecipes',
        components: {
            MPRLeft,
            MPRRight,
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 70px;
        color: black;
        background-color: #f5f5f1;
    }
    h2{
        font-size: 16px;
    }
    p{
        font-weight: 300;
        font-size: 13px;
    }
</style>
