import axios from "axios";
// import Config from "react-native-config";

axios.defaults.baseURL = "https://api.pay-off.overal-x.com/api/v1/";

export default axios.create({});
