import { combineReducers } from "redux";
import { ProductReducer} from "./ProductReducer";
import {selectedProductsReducer,cardItems,changeQuanumber,wishlistItems,procatFilter,sellAddProduct,sellerProductReducer,sellerSelectedProducts,paymentCustomer,sellerpayFilter} from "./ProductReducer";

  const reducers=combineReducers({
    allproducts:ProductReducer,
    product:selectedProductsReducer,
    cardItems:cardItems,
    changeQuanumber,
    wishlistItems,
    procatFilter,
    sellAddProduct,
    sellerProductReducer,
    sellerSelectedProducts,
    paymentCustomer,
    sellerpayFilter,
  });

  export default reducers;