import axios from "axios";

const instance = axios.create({
  baseURL: "https://marketing.devfdb.net/api/v1/marketing/",
});

export default instance;
