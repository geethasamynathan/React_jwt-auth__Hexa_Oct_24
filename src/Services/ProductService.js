// src/Services/ProductService.js
import axios from "axios";

const API_URL = "https://localhost:7299/api/Products";

const getProducts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export { getProducts };
