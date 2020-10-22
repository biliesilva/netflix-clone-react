const API_KEY = 'bee4e49fd6d5ce9b055905fd03747e0f';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- orginais da netflix
- recomendados (trending)
- em alta (top rated)
- acao
- comedia
- terror
- documentarios
*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recommended for you',
                items: []
            },
            {

                slug: 'toprated',
                title: 'Top Rated',
                items: []

            },
            {

                slug: 'action',
                title: 'Action',
                items: []

            },
            {

                slug: 'comedy',
                title: 'Comedy',
                items: []

            },
            {

                slug: 'terror',
                title: 'Terror',
                items: []

            },
            {

                slug: 'documentary',
                title: 'Documentary',
                items: []

            }
        ]
    }
}