<template>
    <div class="footer-top">
        <div class="container d-flex flex-row">
            <div class="logo ad-width d-flex flex-column">
                <img src="/img/avada-food-logo-mob-2x-200x87.png" alt="logo">
                <ul class="d-flex flex-row ">
                    <li><button class="btn"><i class="fa-brands fa-facebook-f"></i></button></li>
                    <li><button class="btn"><i class="fa-brands fa-instagram"></i></button></li>
                    <li><button class="btn"><i class="fa-brands fa-twitter"></i></button></li>
                    <li><button class="btn"><i class="fa-brands fa-youtube"></i></button></li>
                </ul>
            </div>
            <div class="list ad-width">
                <ul class="d-flex flex-column">
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Places</a></li>                   
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li> 
                    <li><a href="#">Contact</a></li>               
                </ul>
            </div>
            <div class="contact ad-width">
                <ul class="d-flex flex-column">
                    <li><p class="text-uppercase">Contact</p></li>
                    <li><a href="#"><i class="fa-solid fa-location-dot"></i> 775 New York Ave, Brooklyn, Kings, New York 11203</a></li> 
                    <li><a href="#"><i class="fa-solid fa-phone"></i> + 0100-505-0000</a></li>
                    <li><a href="#"><i class="fa-solid fa-envelope"></i> info@your-domain.com</a></li> 
                </ul>
            </div>
            <div class="app ad-width">
                <ul class="d-flex flex-column">
                    <li><p class="text-uppercase">get our app!!</p></li>
                    <li><img src="/img/download-android-200x66.png" alt="app"></li> 
                    <li><img src="/img/download-app-store-200x66.png" alt="app"></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'FooterTop'
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .footer-top{
        background-color: $white;
    }
    .container{
        margin-top: 70px;
        margin-bottom: 50px;
        .ad-width{
            width: 25%;
        }
        .logo{
            img{
                width: 230px;
                margin-bottom: 40px;
            }
            ul{
                list-style: none;
                margin-left: 5px;
                li{
                    margin: 2px;
                    border-radius: 3px;
                    i{
                        color: $dark-gray;
                    }

                }
            }
        }
        .list{
            ul{
                list-style: none;
                margin-left: 5px;
                li{
                    margin: 10px;
                    a{
                        text-decoration: none;
                        color: $dark-gray;
                    }
                }
            }
        }
        .contact{
            ul{
                list-style: none;
                margin-left: 5px;
                li{
                    margin: 10px;
                    p{
                        color: $deep-orange;
                    }
                    a{
                        text-decoration: none;
                        color: $dark-gray;
                    }
                }
            }
        }
        .app{
            ul{
                list-style: none;
                margin-left: 5px;
                li{
                    margin: 10px;
                    p{
                        color: $deep-orange;
                    }
                    img{
                        width: 150px;
                    }
                }
            }
        }
        
    }
    
</style>
