<template>
    <div class="col">
        <div class="row ad-image">
            <div class="">
                <img :src="(img)" :key="item.id">
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
    }
</script>

<style lang="scss" scoped>
    .ad-image{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        img{
            width: 250px;
            height: 150px;
        }
    }
</style>
