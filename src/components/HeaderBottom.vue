<template>
    <div class="container d-flex flex-column justify-content-around align-items-center">
        <div class="image">
            <img src="/img/avada-food-logo.png" alt="logo">
        </div>
        <div class="navbar m-3 p-0">
            <nav>
                <ul class="d-flex flex-row m-0 p-0">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Bolg</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><i class="fa-solid fa-magnifying-glass"></i></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'HeaderBottom',
        data(){
            return {
              
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    ul{
        list-style: none;
        li{
            margin-left: 35px;
            margin-right: 35px;
            border-bottom: 3px solid transparent;
            :hover{
                color: $deep-orange;
                border-bottom: 3px solid $deep-orange;
            }
            a{
                text-decoration: none;
                color: $black;
            }
        }
    }
</style>
