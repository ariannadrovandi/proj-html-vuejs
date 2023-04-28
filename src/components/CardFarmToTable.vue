<template>
    <div class="card">
        <div class="card-image">
            <div class="container1">
                <img :src="(image)" :alt="title">
                <div class="overlay">
                    <a class="text" href="#"><i class="fa-solid fa-link"></i> <br> {{ title }}</a>
                </div>
            </div>
            
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
    a{
        text-decoration: none;
    }
    .container1 {
        position: relative;
        padding: 0;
    }
    img{
        display: block;
        width: 100%;
        margin: 0;
        background-size: cover;
    }
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: $deep-orange;
    }
    .container1:hover .overlay {
        opacity: 0.6;
    }
    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>
