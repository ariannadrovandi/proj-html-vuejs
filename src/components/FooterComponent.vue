<template>
    <footer>
        <FooterTop/>
        <FooterBottom/>
    </footer>
</template>

<script>
    import FooterTop from './FooterTop.vue';
    import FooterBottom from './FooterBottom.vue';
    export default{
        name: 'FooterComponent',
        components:{
            FooterTop,
            FooterBottom
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    footer{
        background-color: $light-gray;
    }
</style>
