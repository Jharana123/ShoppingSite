const initialState = {
  list: [],
};

const cartTheProduct = (state= initialState, action) => {
  switch (action.type) {
    case "CART_PRODUCT":
      const { id,data } = action.payload;
      // const ItemIndex=state.list.findIndex((item)=>item.id===action.payload.id);
      // if(ItemIndex>=0){
      //   state.list[ItemIndex].qnty +=1
      // }
      // else{
      //   const temp={...action.payload,qnty:1}
      //   return {
      //     ...state,
      //     list: [
      //       ...state.list,
      //       {
      //         id: id,
      //         data: data,
      //       },temp
      //       // action.payload
      //     ],
      //   };
      // }
      return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
            // action.payload
          ],
        };

        
      case "REMOVE_CART_PRODUCT":
        console.log('action.payload', action.payload.data.id)
        console.log("elem.data.id", state.list.data);
        const cartdata=state.list.filter((elem)=>elem.data!==action.payload.data.id);
        console.log('cartdata', cartdata)
        return {
          ...state,
          list:cartdata
        }
          
      default:
        return state;
      // const { id, data } = action.payload;
      // console.log("Item", data);
      // const exitsItem = state.cartItems((x) => x.product === data.product);
      // if (exitsItem) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((x) =>
      //       x.product === exitsItem.product ? data : x
      //     ),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     cartItems: [...state.cartItems, data],
      //   };
      // }

    // default:
    //   return state;
  }
};
export default cartTheProduct;
