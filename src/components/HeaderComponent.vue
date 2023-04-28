<template>
    <header>
        <HeaderTop/>
        <HeaderBottom/>
    </header>
</template>

<script>
    import HeaderTop from './HeaderTop.vue';
    import HeaderBottom from './HeaderBottom.vue';
    export default{
        name: 'HeaderComponent',
        components: {
            HeaderTop,
            HeaderBottom
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    header{
        width: 100%;
        height: 250px;
        background-color: $white;
        z-index: 10000;
    }
</style>
