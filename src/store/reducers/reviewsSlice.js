const initialState = {
  reviews: [],
};

const AddReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return {...state , reviews: action.payload};
    default:
      return state;
  }
};

export default AddReviewReducer;
