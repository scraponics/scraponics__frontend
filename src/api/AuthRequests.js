import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logininduser = (userDetails) => API.post('/auth/logininduser', userDetails);
export const signupinduser = (userDetails) => API.post('/auth/signupinduser', userDetails);

export const loginorg = (userDetails) => API.post('/auth/loginorg', userDetails);
export const signuporg = (userDetails) => API.post('/auth/signuporg', userDetails);

export const loginvendor = (userDetails) => API.post('/auth/loginvendor', userDetails);
export const signupvendor = (userDetails) => API.post('/auth/signupvendor', userDetails);