import { reactive } from 'vue';

export const store = reactive({
    foodieJournal: [
        {
            id: 1,
            image: '/img/single-post-img3-200x132.jpg',
            title: 'Food Corner: Top Japanese Restaurants for Sushi',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 2,
            image: '/img/fi-roundup-200x132.jpg',
            title: 'Roundup: My New Favorite Recipes For Healthy Living',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 3,
            image: '/img/fi-toasts-200x132.jpg',
            title: 'Why These Toast with Tea are My New Favorite',
            credits: 'By admin | March 25th, 2019'
        }
    ],
    popularRecipes: [
        {
            id: 1,
            img: '/img/Mixed-fruits-200x132.jpg'
        },
        {
            id: 2,
            img: '/img/r-rachel-park-366508-unsplash-min-200x132.jpg'
        },
        {
            id: 3,
            img: '/img/r-michelle-tsang-500721-unsplash-min-200x132.jpg'
        },
        {
            id: 4,
            img: '/img/quick-summer-drink-460x295.jpg'
        },
        {
            id: 5,
            img: '/img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg'
        },
        {
            id: 6,
            img: '/img/perfect-cosmopolitan-460x295.jpg'
        },
        {
            id: 7,
            img: '/img/fi2x-6-460x295.jpg'
        },
        {
            id: 8,
            img: '/img/r-brooke-lark-96398-unsplash-min-460x295.jpg'
        }
    ],
    
    culinaryCollection: [
        {
            id: 1,
            image:'/img/drinks-recipes.png',
            title: 'DRINKS',
        },
        {
            id: 2,
            image:'/img/soups-recipes.png',
            title: 'SOUPS',
        },
        {
            id: 3,
            image:'/img/baking-recipes.png',
            title: 'BAKERY',
        },
        {
            id: 4,
            image:'/img/dinner-recipes.png',
            title: 'DINNER',
        },
        {
            id: 5,
            image:'/img/healthy-recipes.png',
            title: 'HEALTHY',
        },
        {
            id: 6,
            image:'/img/staff-picks.png',
            title: 'STAFF PICKS',
        },
        {
            id: 7,
            image:'/img/premium-recipes.png',
            title: 'APPETISERS',
        },
        {
            id: 8,
            image:'/img/quick-easy-recipes.png',
            title: 'QUICK & EASY',
        },
    ],
    farmToTableCard: [
        {
            id: 1,
            image: '/img/fi-roundup-200x132.jpg',
            title: 'Roundup: My New Favorite Recipes For Healthy Living',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 2,
            image: '/img/fi-korean-food-200x132.jpg',
            title: 'Meal Prep, Korean Bibimbap with Kimchi',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 3,
            image: '/img/fi-toasts-200x132.jpg',
            title: 'Why These Toast with Tea are My New Favorite',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 4,
            image: '/img/fi-street-food-200x132.jpg',
            title: 'Exploring Street Food in Bangkok',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 5,
            image: '/img/fi-organic-breakfast-200x132.jpg',
            title: 'Organic Choices for Healthier Living',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 6,
            image: '/img/fi-water-side-rest-200x132.jpg',
            title: '5 Watherside Restaurants in Istanbul for Special Events',
            credits: 'By admin | March 25th, 2019'
        }
    ],
})