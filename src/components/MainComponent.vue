<template>
  <main>
    <MainJumbo/>
    <PopularRecipes/>
    <CulinaryCollection/>
    <FarmToTable/>
    <FormComponentVue/>
  </main>
</template>

<script>
    import MainJumbo from './MainJumbo.vue';
    import PopularRecipes from './PopularRecipes.vue';
    import CulinaryCollection from './CulinaryCollection.vue';
    import FarmToTable from './FarmToTable.vue';
    import FormComponentVue from './FormComponent.vue';
    export default {
        name:'MainComponent',
        components:{
          MainJumbo,
          PopularRecipes,
          CulinaryCollection,
          FarmToTable,
          FormComponentVue,
        }
    }

   
</script>

<style lang="scss" scoped>
  @use '../assets/styles/partials/variables' as *;
    main{
        background-color: $light-gray;
    }
</style>

