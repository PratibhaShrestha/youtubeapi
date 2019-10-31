import axios from "axios";
const KEY = "AIzaSyDZnhSlEDh0bpXzDyGYv2vbrcZbA5go3fQ";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
