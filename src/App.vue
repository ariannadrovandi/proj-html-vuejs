<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>
</template>

<script>
  import { store } from './data/store';
    import axios from 'axios';
    import HeaderComponent from './components/HeaderComponent.vue';
    import MainComponent from './components/MainComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    export default {
        name: 'App',
        components: {
            HeaderComponent,
            MainComponent,
            FooterComponent
        },
        data(){
            return {
              store
            }
        }
    }
</script>

<style lang="scss" scoped>
  
  *{
    font-family: 'Lato', sans-serif;
  }
</style>
