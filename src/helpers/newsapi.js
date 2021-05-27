import axios from 'axios';

// https://newsapi.org/v2/topheadlines?country=gb&category=business&apiKey=0067493c08eb4d2283dad622c76bdbf7
const api = {
    baseUrl: 'https://newsapi.org/v2/',
    params: '&category=business',
    key: '&apiKey=' + '0067493c08eb4d2283dad622c76bdbf7'
}

// NEWS

export const getNews = (search = 'gb') => {

    let response = axios.get(
        api.baseUrl
        + `top-headlines?country=${search}`
        + api.params
        + api.key
    ).then(res => { return res.data })
    return response;

}