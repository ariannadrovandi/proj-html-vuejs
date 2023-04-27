<template>
  <main>
    <MainJumbo/>
    <MainPopularRecipesVue/>
  </main>
</template>

<script>
    import MainJumbo from './MainJumbo.vue';
    import MainPopularRecipesVue from './MainPopularRecipes.vue';
    export default{
        name: 'MainComponent',
        components:{
            MainJumbo,
            MainPopularRecipesVue,
        }
    }
</script>

<style lang="scss" scoped>
    main{
        background-color: #f5f5f1;
    }
</style>
