<template>
    <div class="container">
        <p>© Copyright 2012 - 2020 | Avada Theme by ThemeFusion I AIl Rights Reserved I Powered by WordPress</p>
    </div>
</template>

<script>
    export default {
        name: 'FooterBottom'
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .container{
        padding: 10px;
    }
    p{
        margin-bottom: 20px;
        padding: 0;
        text-align: center;
        font-size: 13px;
        color: $dark-gray;
    }
</style>