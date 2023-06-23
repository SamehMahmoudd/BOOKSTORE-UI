import axios from "../config/axiosConfig";

export const getAuthors = async () => {
  try {
    const result = await axios.get(`/authors`)
    console.log('result', result);
    return result.data;
  } catch (error) {
    console.log('error in getAuthors service -> ', error)
  }
}