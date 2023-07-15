import axios from "axios";

// connect react project to the back-end

axios.defaults.baseURL = 'https://canvascorner-drf-api-8c6faae9ad24.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;