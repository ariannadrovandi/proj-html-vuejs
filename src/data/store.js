import { reactive } from 'vue';

export const store = reactive({
    foodieJournal: [
        {
            id: 1,
            image: '/public/img/single-post-img3-200x132.jpg',
            title: 'Food Corner: Top Japanese Restaurants for Sushi',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 2,
            image: '/public/img/fi-roundup-200x132.jpg',
            title: 'Roundup: My New Favorite Recipes For Healthy Living',
            credits: 'By admin | March 25th, 2019'
        },
        {
            id: 3,
            image: '/public/img/fi-toasts-200x132.jpg',
            title: 'Why These Toast with Tea are My New Favorite',
            credits: 'By admin | March 25th, 2019'
        }
    ]
})