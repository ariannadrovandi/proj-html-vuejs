<template>
    <div class="card">
        <img src="/img/Yogurt-Nan-200x132.jpg" class="card-img-top" alt="...">
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
        .line{
            
        }
        .card-text{
            font-size: 16px;
        };
        .btn{
            background-color: orange;
            color: white;
            font-size: 14px;
        }
    }
</style>
