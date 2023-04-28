<template>
    <div class="ad-bg">
        <h2>Subscribe <span>&</span> Recive A Free eBook</h2>
        <p class="my-5">Aliquam erat volutpat. Ut quis liguala a magna blandit finibus. Suspendisse maximus <br> lacus non nunc lacinia lobortis</p>
        <div class="email mb-3 d-flex flex-row">
            <input type="email" class="form-control" id="email" placeholder="Insert your email...*">
            <button class="text-uppercase btn px-3 py-2">subscribe</button>
        </div>
    </div>
</template>

<script>
    export default{
        name:'FormComponent'
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .ad-bg{
        margin-top: 90px;
        width: 100vw;
        padding: 90px;
        background-color: $white;
        color: $black;
        background-image: url('/img/subscribe-sec-bg.png');
        background-size: cover;
        text-align: center;
        h2{
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            span{
                color: $deep-orange;
            }
        }
        p{
            font-size: 18px;
            color: $dark-gray;
        }
        .email{
            margin: 0 auto;
            width: 600px;
            button{
                background-color: $deep-orange;
                color: $white;
                border-radius: 0;
                margin-left: 20px;
            }
        }
    }
</style>
