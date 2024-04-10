import axios from "axios";
import requests from "./request";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(requests.fetchGroceries);
        return response.data.products;
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(requests.fetchPosts);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}