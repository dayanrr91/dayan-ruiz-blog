import axios from 'axios';

// Add a request interceptor 
var axiosInstance = axios.create();

let apiBaseUrl = "http://localhost:4040/api/";

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent 
    //If the header does not contain the token and the url not public, redirect to login  
    var accessToken = localStorage.getItem('accessToken');

    config.url = apiBaseUrl + config.url;
    //if token is found add it to the header
    if (accessToken) {
        if (config.method !== 'OPTIONS' && !config.url.includes("login") && !config.url.includes("register")) {
            config.headers.authorization = 'Bearer ' + accessToken;
            return config;
        }
        else {
            window.location.href = "/home";
        }
    }
    else {
        if (!config.url.includes("login") && !config.url.includes("register")) {
            // window.location.href = "/login";
            return config;
        }
        else {
            return config;
        }
    }

}, function (error) {
    window.location.href = "/login";
});

export default axiosInstance;