<template>
    <div class="card m-2">
        <div class="card-image">
            <img :src="(image)" :alt="title">
        </div>
        <div class="my-4 d-flex flex-column align-items-center justify-content-center">
            <p class="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardJumbo',
        props: [
            'title',
            'image'
        ],
    }
</script>

<style lang="scss" scoped>
    .card{
        border: none;
        background-color: white;
        img{
            width: 100%;
            height: 250px;
        };
        .title{
            text-align: center;
            font-size: 24px;
        }
    }
    
</style>