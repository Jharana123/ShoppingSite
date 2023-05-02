import addTheProduct from "./product";
import { combineReducers } from "redux";
import cartTheProduct from "./cartProduct";
import WishList from "./wishList";
const rootReducers=combineReducers(
    {
        addTheProduct,
        cartTheProduct,
        WishList,
        
        
        
        
        
    }
)
export default rootReducers;