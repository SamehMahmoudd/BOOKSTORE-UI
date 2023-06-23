import axios from "../config/axiosConfig";

export const getCategories = async () => {
  try {
    const result = await axios.get(`/categories`)
    console.log('result', result);
    return result.data;
  } catch (error) {
    console.log('error in getCategories service -> ', error)
  }
}