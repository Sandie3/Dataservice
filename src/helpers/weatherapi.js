import axios from 'axios';

// http://api.openweathermap.org/data/2.5/weather?zip=8500,DK&appid=a9eeb7c6589e476925c6e7f78c4baa2e&units=metric&lang=dk
const api = {
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
    key: '&appid=' + 'a9eeb7c6589e476925c6e7f78c4baa2e',
    params: '&units=metric&lang=dk',
    imageURL: "http://openweathermap.org/img/wn/"
}

export let imageURL = api.imageURL;

// WEATHRE

export const getWeatherByZip = (zipcode) => {

    let response = axios.get(api.baseUrl + `weather?zip=${zipcode},DK` + api.key + api.params).then(res => { return res.data })
    return response;
    
}