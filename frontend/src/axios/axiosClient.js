import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 3000,
});


instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        
        

        if (error.response?.status === 401) {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            window.location = "/login";
        }
        return Promise.reject(error);
    }
);

export default instance;