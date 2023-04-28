<template>
    <div class="card">
        <img src="/img/single-post-img3-1200x790.jpg">
        <div class="card-body">
            <h5 class="card-title">Food Corner: Top Japanese Restaurants for Sushi</h5>
            <p class="subtitle">By admin | March 25th, 2019</p>
            <hr>
            <p class="card-text lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus, hic nesciunt quis, veniam aut quod voluptatum corporis magni mollitia laboriosam sit facere rerum maiores doloribus! Repudiandae ab sequi debitis, animi fugiat expedita consequuntur recusandae necessitatibus nesciunt enim accusamus natus deserunt nam doloribus veritatis facere.</p>
            <div class="d-flex flex-row justify-content-between align-items-center">
                <a href="#" class="ad-link">Read More > </a>
                <p><i class="fa-regular fa-comments"></i> 0</p>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FTTLeft',
    }
</script>

<style lang="scss" scoped>
    .card{
        width: 65%;
        img{
            height: 550px;
        }
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
        .ad-link{
            color: black;
            font-size: 12px;
        }
    }
</style>