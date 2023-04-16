import axios from "axios";

axios.defaults.baseURL = "http://10.0.2.2:8000/api/v1/";

export default axios.create({});
