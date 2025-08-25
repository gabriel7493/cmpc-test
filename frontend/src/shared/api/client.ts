import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  // With Vite proxy, requests to /api will be proxied to backend in dev.
});
