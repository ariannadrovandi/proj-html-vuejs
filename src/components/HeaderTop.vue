<template>
    <div class="container d-flex flex-row justify-content-between align-items-center">
        <div class="left d-flex flex-row">
            <button class="btn">Download App <span class="badge ad-badge">iOS</span></button>
            <button class="btn">Advertise with us</button>
        </div>
        <div class="right">
            <ul class="d-flex flex-row ">
                <li><button class="btn"><i class="fa-brands fa-facebook-f"></i></button></li>
                <li><button class="btn"><i class="fa-brands fa-instagram"></i></button></li>
                <li><button class="btn"><i class="fa-brands fa-twitter"></i></button></li>
                <li><button class="btn"><i class="fa-brands fa-youtube"></i></button></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeaderTop',
        
    }
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .ad-badge{
        background-color: orange;
        color: white;
    }
    i{
        color: gray;
    }
</style>
