const initialState = {
  list: [],
};

const addTheProduct = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    default:
      return state;
  }
};
export default addTheProduct;
