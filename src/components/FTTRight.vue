<template>
    <div class="right d-flex flex-column">
        <div class="right-top">
            <img src="/img/ad-bg.jpg">
            <p class="text-uppercase">view our latest recipes</p>
        </div>
        <div class="right-bottom">
            <img src="/img/singapore-featured-image-200x132.jpg">
            <p class="text-capitalize">city guide: singapore</p>
            <button class="btn text-uppercase"><i class="fa-solid fa-earth-europe"></i>view all city guides</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FTTLeft',
    }
</script>

<style lang="scss" scoped>
    .right{
        width: 33%;
        border: 1px black solid;
        text-align: end;
        .right-top{
            margin: 0;
            height: 520px;
            img{
                width: 390px;
                height: 470px;
            };
            p{
                width: 150px;
                font-size: 22px;
                text-align: center;
                position: relative;
                top: -280px;
                right: -155px;
            };
            
            
        };
        .right-bottom{
            margin: 0;
            img{
               width: 390px;
               margin: 0
            };
            p{
                width: 250px;
                height: 38px;
                font-size: 22px;
                color: white;
                background-color: rgba(0, 0, 0, 0.577);
                line-height: 28px;
                text-align: center;
                position: relative;
                top: -80px;
                right: -36px;
            };
            button{
                width: 390px;
                background-color: orange;
                color: white;
                border-radius: 0;
                margin: 0;
                position: relative;
                top: -55px;
            }
        }

    }
</style>