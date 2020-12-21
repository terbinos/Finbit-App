import axios from 'axios';
export const baseURL = 'https://jsonplaceholder.typicode.com';

export const AxAsync = async () => {
    return axios.create({
        baseURL,
        headers: {
            accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
