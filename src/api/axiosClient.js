import axios from "axios";
const axiosClient = axios.create({
    // trong axios có nhiều cái config
    baseURL: "http://localhost:8080/",
    header: {
        "Content-types": "applycation/json",
    },
});
//Interceptor
axiosClient.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        console.log("error", error.response);
        const { data, config, status } = error.response;
        const URL = ["/auth/local/register", "/auth/local"];
        if (URL.includes(config.url) && status === 400) {
            const errorList = data.data || [];
            console.log("errorList", errorList);
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            console.log("messageList", messageList);
            const firstMessageList = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessageList.message);
        }
        return Promise.reject(error);
    }
);
export default axiosClient;