<template>
  <main>
    <MainJumbo/>
    <PopularRecipes/>
    <CulinaryCollection/>
    <FarmToTable/>
  </main>
</template>

<script>
    import MainJumbo from './MainJumbo.vue';
    import PopularRecipes from './PopularRecipes.vue';
    import CulinaryCollection from './CulinaryCollection.vue';
    import FarmToTable from './FarmToTable.vue';
    export default {
        name:'MainComponent',
        components:{
          MainJumbo,
          PopularRecipes,
          CulinaryCollection,
          FarmToTable,
        }
    }

   
</script>

<style lang="scss" scoped>
    main{
        background-color: #f5f5f1;
    }
</style>

