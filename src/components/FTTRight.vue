<template>
    <div class="right d-flex flex-column">
        <div class="ad-content">
            <div class="right-top-img">
                <img src="/img/ad-bg.jpg">
                <p class="text-uppercase">view our latest recipes</p>
            </div>
            <div class="right-top-guide">
                <img src="/img/singapore-featured-image-200x132.jpg">
                <p class="text-capitalize">city guide: singapore</p>
                <button class="btn text-uppercase"><i class="fa-solid fa-earth-europe"></i> view all city guides</button>
            </div>
            <div class="line">
                <hr>
            </div>
            <div class="searchbox">
                <div class="rounded-2 imput-group d-flex align-items-center p-2">
                    <button class="input-group-text rounded-0" id="search-magnifying-glass"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" class="form-control rounded-0" placeholder='Search' aria-describedby="search-magnifying-glass">
                </div>
            </div>
        </div>
        <div class="social align-items-start">
            <p class="text-capitalize">follow us</p>
        </div>
        <ul class="d-flex flex-row ">
            <li><button class="btn"><i class="fa-brands fa-facebook-f"></i></button></li>
            <li><button class="btn"><i class="fa-brands fa-instagram"></i></button></li>
            <li><button class="btn"><i class="fa-brands fa-twitter"></i></button></li>
            <li><button class="btn"><i class="fa-brands fa-youtube"></i></button></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FTTLeft',
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .right{
        width: 33%;
        .ad-content{
            text-align: end;
            align-items: end;
            .right-top-img{
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
            .right-top-guide{
                margin: 0;
                height: 320px;
                img{
                    width: 390px;
                    margin: 0
                };
                p{
                    width: 250px;
                    height: 38px;
                    font-size: 22px;
                    color: $white;
                    background-color: rgba(0, 0, 0, 0.668);
                    text-align: center;
                    position: relative;
                    top: -80px;
                    right: -38px;
                };
                button{
                    width: 390px;
                    background-color: $deep-orange;
                    color: $white;
                    border-radius: 0;
                    margin: 0;
                    position: relative;
                    top: -55px;
                }
            };
            .line{
                width: 390px;
                margin-left: 36px;
            };
            .searchbox{
                height: 55px;
                width: 390px;
                margin-left: 36px;
                #search-magnifying-glass{
                    height: 38px;
                    background-color: $white;
                }
            };
        };
        .social{
            margin-top: 50px;
            margin-left: 36px;
            color: $deep-orange;
            font-size: 20px;
            font-family: 'Playfair Display', serif;
        };
        ul{
            list-style: none;
            margin-left: 5px;
            li{
                margin: 2px;
                border-radius: 3px;
                background-color: #e5e5e5;
                i{
                    color: #767474;
                }

            }
        }
        

    }
</style>