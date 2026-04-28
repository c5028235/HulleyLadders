import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// PRODUCTS
export const getProducts = () => API.get("products/");

export const getHomeProducts = () => API.get("home/");

export const getProduct = (slug) => API.get(`products/${slug}/`);

// CATEGORIES
export const getCategories = () => API.get("categories/");

export const getCategoryProducts = (slug) =>
  API.get(`categories/${slug}/products/`);