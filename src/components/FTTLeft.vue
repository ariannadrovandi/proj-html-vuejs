<template>
    <div class="ad-container d-flex flex-column">
        <div class="card ad-card">
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
        <div class="d-flex flex-row flex-wrap">
            <CardFarmToTable class="d-flex flex-column" v-for="(item, index) in store.farmToTableCard" :key="item.id" :title="item.title" :credits="item.credits" :image="item.image"/>
        </div>
        <button class="btn rounded-0 text-uppercase">load more posts</button>
    </div>
    
</template>

<script>
    import {store} from '../data/store'
    import CardFarmToTable from './CardFarmToTable.vue';
    export default {
        name: 'FTTLeft',
        components:{
            CardFarmToTable
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .ad-container{
        width: 65%;
        .ad-card{
            width: 805px;
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
                color: $black;
                font-size: 12px;
            }
        }
        button{
            margin-top: 40px;
            width: 95%;
            background-color: #e6e4e4;
        }
    }
    
</style>