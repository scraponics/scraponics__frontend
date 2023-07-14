import axios from "axios";

const API = axios.create({ baseURL: "https://scraponicsbackend.onrender.com"});

export const rateDataFetch = () => API.post('/rate/get');