<template>
    <div class="image-jumbo">
        <div class="ad-badge badge">
            <p>TODAY'S PICK</p>
        </div>
        <div class="title p-5 pb-3">
            <h1 class="pb-3 m-0 mb-2">Food Corner: Top Japanese <br> Restaurants for Sushi</h1>
            <p>March 25, 2019</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'MainJumbo'
    }
</script>

<style lang="scss" scoped>
    .image-jumbo{
        width: 100%;
        height: 600px;
        position: relative;
        background-image: url('/img/single-post-img3-1200x790.jpg');
        background-size: cover;
    }
    .ad-badge{
        background-color: orange;
        text-align: center;
        position: absolute;
        left: 47%;
        top: 28%;
        z-index: 300;
    }
    .title{
        position: absolute;
        top: 30%;
        left: 30%;
        background-color: white;
        font-family: 'Playfair Display', serif;
        text-align: center;
        z-index: 100;
    }

</style>
