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
    header{
        
        background-color: #fff;
    }
</style>
