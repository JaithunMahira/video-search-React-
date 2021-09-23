import axios from "axios";

const KEY = "AIzaSyA5IVRbBTQmhx90GoQfVl4hYV7r0XAekBQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
