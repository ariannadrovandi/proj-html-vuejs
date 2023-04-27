<template>
  <main>
    <MainJumbo/>
    <PopularRecipes/>
    <CulinaryCollection/>
  </main>
</template>

<script>
    import MainJumbo from './MainJumbo.vue';
    import PopularRecipes from './PopularRecipes.vue';
    import CulinaryCollection from './CulinaryCollection.vue';
    export default {
        name:'MainComponent',
        components:{
          MainJumbo,
          PopularRecipes,
          CulinaryCollection,
        }
    }

   
</script>

<style lang="scss" scoped>
    main{
        background-color: #f5f5f1;
    }
</style>

