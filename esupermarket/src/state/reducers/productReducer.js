export const productReducer = (state = { product: [] }, action) => {
  //   console.log("state-------->", state);
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...action.data, ...state.product],
    };
  }
  if (action.type == "SELECTED_PROD_ID") {
    return { ...state, selectedprodid: [action.data] };
  }
  if (action.type === "REMOVE_PRODUCT") {
    // const newData = state.product.filter((item) => item !== action.data);
    state.product.pop();
    return {
      //   ...state,
      //   product: newData,
      product: [...state.product],
    };
  }
  return state;
};
