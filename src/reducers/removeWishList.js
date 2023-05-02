const initialState = {
  list: [],
};

const removeWishList = (state = initialState, action) => {
  //  const [status, setStatus] = useState(0);
  //  const ChangeStatus = () => {
  //    setStatus(status ? 0 : 1);
  //  };
  //   const { productId } = useParams();
  switch (action.type) {
    case "REMOVE_FROM_WISHLIST":
      // const { id, data } = action.payload;

      console.log("action", action);
      // return {
      //   ...state,
      //   list: [
      //     ...state.list,
      //     {
      //       id: id,
      //       data: data,
      //     },
      //   ],

      // };

      let List = [...state.list];
      const productInlist = List.find(
        (product) => product.id === action.payload.id
      );
      if (!productInlist) {
        return state;
      }
      List = List.filter((product) => product.id !== action.payload.id);
      // toast.success("Book removed from wishlist");
      return {
        ...state,
        list: List,
      };

    default:
      return state;
  }
};
export default removeWishList;
