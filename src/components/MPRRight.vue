<template>
    <div class="col">
        <div class="row ad-image">
            <div class="container1">
                <img :src="(img)">
                <div class="overlay">
                    <a href="#" class="text"><i class="fa-solid fa-link"></i></a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'MPRRight',
        props: [
            'img'
        ],
    };
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .ad-image{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        img{
            margin: 20px;
            width: 300px;
            height: 200px;
        }
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
        margin: 20px;
        width: 300px;
        height: 200px;
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
