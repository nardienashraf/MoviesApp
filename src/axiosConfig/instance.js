import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        'api_key': '784d2a218871b35acb7cfbdd7011d467'
    }
})

export default axiosInstance;

// https://api.themoviedb.org/3/movie/popular?api_key={apiK ey}