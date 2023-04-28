<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="title">
                <p class="mt-5 text-uppercase fs-5">farm to table</p>
                <p class="mt-1 mb-5">Aliquam erat volutpat. Ut quis liguala a magna blandit finibus. Suspendisse <br> maximus lacus non nunc lacinia lobortis</p>
            </div>
            <div class="button">
                <button class="btn text-uppercase rounded-0">read our blog <i class="fa-solid fa-book-open-reader"></i></button>
            </div>
        </div>
        <div class="mt-5 d-flex justify-content-between">
            <FTTLeft/>
            <FTTRight/>
        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    import FTTLeft from './FTTLeft.vue';
    import FTTRight from './FTTRight.vue';
    export default{
        name: 'FarmToTable',
        components:{
            FTTLeft,
            FTTRight,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 100px;
    }
    .button{
        button{
            color: white;
            background-color: orange;
        }
    }
</style>
