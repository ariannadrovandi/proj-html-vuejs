<template>
    <div class="card">
        <div class="container">
            <img src="/img/Yogurt-Nan-200x132.jpg">
            <div class="overlay">
                <a href="#" class="text"><i class="fa-solid fa-link"></i></a>
            </div>
        </div>
        
        <div class="card-body">
            <h5 class="card-title">Lunch Favorite with Salad, Naan and Beans</h5>
            <p class="subtitle">Bakery, featured, Healthy, Latest Recipes, Staff Picks</p>
            <hr class="line">
            <p class="card-text lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus, hic nesciunt quis, veniam aut quod voluptatum corporis magni mollitia laboriosam sit facere rerum maiores doloribus! Repudiandae ab sequi debitis, animi fugiat expedita consequuntur recusandae necessitatibus nesciunt enim accusamus natus deserunt nam doloribus veritatis facere.</p>
            <a href="#" class="btn text-uppercase rounded-0">learn more</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MPRLeft',
       
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .card{
        width: 50%;
        .card-title{
            font-size: 22px;
            font-family: 'Playfair Display', serif;
        };
        .subtitle{
            font-size: 13px;
            font-family: 'Playfair Display', serif;
        };
        .card-text{
            font-size: 16px;
        };
        .btn{
            background-color: $deep-orange;
            color: $white;
            font-size: 14px;
        }
    }
    .container {
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
    .container:hover .overlay {
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
