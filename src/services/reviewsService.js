import axios from "../config/axiosConfig";

export const addBookReviews = (bookId ,review) => (dispatch) => {
  try {
    const res = axios.post(`/review/book/${bookId}`,  review );
    dispatch({ type: "ADD_REVIEW" , payload: res.data,});
  } catch (error) {
    console.log(error);
  }
};
