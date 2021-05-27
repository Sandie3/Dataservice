import axios from 'axios';

const api = {
    baseUrl: 'http://localhost:5056/monarker'
}

// GET MONARK

export const getMonark = () => {
    let response = axios.get(api.baseUrl)
        .then(res => { return res.data })
    return response;
}

// GET MONARK FROM ID

export const getMonarkFromId = (monarkerId) => {
    let response = axios.get(api.baseUrl + '/' + monarkerId)
        .then(res => { return res.data })
    return response;
}

// GET MONARK FROM ID

export const searchMonark = (monarkerId) => {
    let response = axios.get(api.baseUrl + '/soeg/' + monarkerId)
        .then(res => { return res.data })
    return response;
}

// POST MONARK

export const postMonark = (monarkerData) => {
    let response = axios.post(api.baseUrl + '/admin', monarkerData)
        .then(res => { return res.data })
    return response;

}

// DELETE MONARK

export const delMonark = (monarkerId) => {
    let response = axios.delete(api.baseUrl + '/admin/' + monarkerId)
        .then(res => { return res.data })
    return response;

}

// EDIT MONARK

export const editMonark = (monarkerId, monarkerData) => {
    let response = axios.put(api.baseUrl + '/admin/' + monarkerId, monarkerData)
        .then(res => { return res.data })
    return response;
}