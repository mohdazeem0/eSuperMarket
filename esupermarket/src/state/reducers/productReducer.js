export const productReducer = (
  state = { data: ["something data"] },
  action
) => {
  console.log("action====>", action);
  return state;
};
