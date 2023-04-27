<template>
    <div class="ad-container">
        <div class="image-jumbo">
            <div class="ad-badge badge">
                <p>TODAY'S PICK</p>
            </div>
            <div class="title p-5 pb-3">
                <h1 class="pb-3 m-0 mb-2">Food Corner: Top Japanese <br> Restaurants for Sushi</h1>
                <p>March 25, 2019</p>
            </div>
        </div>
        <!-- <div class="foodie container">
            <h2 class="m-3 text-uppercase fs-6 text-center">foodie journal</h2>
            <div v-for="(item, index) in store.foodieJournal" :key="item.id" :title="item.title" :credits="item.credits" :image="item.image">
                <div class="card m-2">
                    <div class="card-image">
                        <img :src="(image)" :alt="title">
                    </div>
                    <div class="my-4 d-flex flex-column align-items-center justify-content-center">
                        <p>{{ title }}</p>
                        <p>{{ credits }}</p>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default{
        name: 'MainJumbo',
        props: [
            'title',
            'credits',
            'image'
        ],
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ad-container{
        width: 100%;
        background-color: #f5f5f1;
        border: 1px solid black;
    }
    .image-jumbo{
        width: 100%;
        height: 650px;
        position: relative;
        background-image: url('/img/single-post-img3-1200x790.jpg');
        background-size: cover;
    }
    .ad-badge{
        background-color: orange;
        text-align: center;
        position: absolute;
        left: 46%;
        top: 28%;
        z-index: 300;
        p{
            margin: 0;
            padding: 5px;
            font-size: 14px;
        }
    }
    .title{
        position: absolute;
        top: 30%;
        left: 34%;
        background-color: white;
        border-radius: 8px;
        font-family: 'Playfair Display', serif;
        text-align: center;
        z-index: 100;
    }
    // .foodie{
    //     border: 1px solid black;
    //     background-color: white;
    //     position: absolute;
    //     top: 90%;
    //     left: 6%;
    // }

</style>
