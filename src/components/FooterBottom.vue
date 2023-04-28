<template>
    <div class="container d-flex flex-row align-items-center">
        <div>
            <a href="#"><i class="fa-solid fa-circle-arrow-up"></i></a>
        </div>
        <div class="text">
            <p>© Copyright 2012 - 2020 | Avada Theme by ThemeFusion I AIl Rights Reserved I Powered by WordPress</p>
        </div>
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
    a{
        i{
            color: $dark-gray;
            font-size: 30px;
        }
    }
    .text{
        margin-left: 320px;
        p{
            margin-bottom: 20px;
            padding: 0;
            text-align: center;
            font-size: 13px;
            color: $dark-gray;
        }
    }
    
</style>