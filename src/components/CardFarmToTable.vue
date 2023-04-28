<template>
    <div class="card">
        <div class="card-image">
            <img :src="(image)" :alt="title">
        </div>
        <div class="my-4 d-flex flex-column align-items-center justify-content-center">
            <p class="title">{{ title }}</p>
            <p>{{ credits }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardFarmToTable',
        props: [
            'title',
            'credits',
            'image'
        ],
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .card{
        width: 45%;
        margin-right: 40px;
        margin-top: 40px;
        border: none;
        font-family: 'Playfair Display', serif;
        img{
            width: 100%;
            height: 250px;
        };
        .title{
            text-align: center;
            font-size: 22px;
        }
    }
    
</style>
