<template>
    <div class="card m-2">
        <div class="card-image">
            <img :src="(image)" :alt="title">
        </div>
        <div class="card-text my-4 d-flex flex-column align-items-center justify-content-center">
            <p class="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'CardJumbo',
        props: [
            'title',
            'image',
        ],
        data(){
            return {
                store,
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .card{
        border: none;
        background-color: $white;
        width: 280px;
        align-items: center;
        justify-content: center;
        img{
            width: 100px;
            height: 100px;
        };
        .title{
            text-align: center;
            font-size: 16px;
        }
    }
    
</style>