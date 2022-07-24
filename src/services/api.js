import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users",
});

export const token = "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";
