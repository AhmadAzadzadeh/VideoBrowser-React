import axios from "axios";

const KEY = "AIzaSyAOHFVTK4Bt8yj-gdFXlybiZ5lJrh_PTq4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
