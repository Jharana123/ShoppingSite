export const addProduct=(data)=>{
    
    return{
        type:"ADD_PRODUCT",
        payload:{
            id:new Date().getTime().toString(),
            data:data

        }
    }
}
//For show the product details
export const filterProduct=(id)=>{
    // console.log('data', data)
    return{
        type:"FILTER_PRODUCT",
        payload:{
            id
        }
    }
}

export const cartProduct=(data)=>{
    return {
      type: "CART_PRODUCT",
      payload: {
        data
      },
    };
}

export const removeCartProduct = (data,id) => {
  return {
    type: "REMOVE_CART_PRODUCT",
    payload: {
      id,data
    },
  };
};
export const WishList=(data)=>{
    return {
      type: "WISH_LIST",
      payload: {
        data
      },
    };
}
// export const list = (id) => {
//   return {
//     type: "REMOVE_FROM_WISHLIST",
//     payload: {
//       id,
//     },
//   };
// };