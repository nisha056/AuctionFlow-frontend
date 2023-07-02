import axios from "axios";
//PUT request to make a bid
export const bid = (product_id: string, details: any) => {
  return axios.put(`http://localhost:8000/products/${product_id}/bid`, details);
};
// GET requests
export const product = () => {
  return axios.get("http://localhost:8000/products");
};
// POST requests
export const like = (_id: string, details: any) => {
  return axios.post(`http://localhost:8000/products/like/${_id}`, details);
};
