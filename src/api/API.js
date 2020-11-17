import axios from "axios";
import { API_KEY } from "../secrets";

// secrets are stored in secrets.js
const KEY = API_KEY;

// maxResults for the params are sent from the methods
const API = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    key: KEY
  }
});

export default API;
