import axios from "axios";

export const $api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  withCredentials: true,
});

export const $privateApi = $api.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token") ?? " "}`,
  },
});
