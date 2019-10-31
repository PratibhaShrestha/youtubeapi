import axios from "axios";
const KEY = "AIzaSyDaVgC6dZudkAQ2uTRKml0rVNuF3eW-gYQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    key: KEY
  }
});
