import axios from 'axios';
const key = 'bd9500c8';
const configOMB = {
    baseURL: `http://www.omdbapi.com/apikey=${key}/`,
};

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
      // @ts-ignore
        return axiosInstance.get('', {t: title})
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
