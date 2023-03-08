import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers:
        {
            Authorization: 'Client-ID seCWXoL5rIUBy4ABYmuLV1eRYQ4tpPweV7bwvKzqL5c',
        },
        params:
        {
            query: term,
        },

    })

    return response.data.results;



}

export default searchImages;