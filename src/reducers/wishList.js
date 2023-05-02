import { HeartFilled } from "@ant-design/icons";

const initialState = {
  list: [],
};

const WishList = (state = initialState, action) => {
  

  switch (action.type) {
    case "WISH_LIST":
      const { data } = action.payload;

      if (
        action.payload.data.isFavourite === true &&
        state.isFavourite !== false  
       
      ) {
        return {
          ...state,
          list: [
            ...state.list,
            {
              data: data,
            },
          ],
          isFavourite: false,
          isColor:"green",
          
        };
      }
      if (
        state.isFavourite === false &&
        state.list !== action.payload.data.id
      ) {
        return {
        list:[
          
        ]
        };
      }

    default:
      return state;
  }
};
export default WishList;
