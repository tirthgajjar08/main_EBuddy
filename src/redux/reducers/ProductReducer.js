import { type } from "@testing-library/user-event/dist/type";
import { ActionType } from "../contants/ActionType";


 const initialState={
        products:[],
        cartData:[],

        wishlistData:[],
        procatfilter:[],
        sellerpayfilter:[],
        cuspayment:[]
 }

 export const ProductReducer=(state=initialState,{type,payload})=>{

        switch(type){

            case ActionType.SET_PRODUCT:
                return {...state,products:payload};
            
            default:
                return state; 

        }
 }

export const selectedProductsReducer = (state = {}, { type, payload }) => {

    console.log("Hello selected product",type);
    switch (type) {
      case ActionType.SELECTED_PRODUCT:
        return { ...state, ...payload };
       
        case ActionType.REMOVE_SELECTED_PRODUCTED:
        return {};
      default:
        return state;
    }
  }

export const cardItems=(state = initialState, {type,payload}) =>{
  console.warn("I am in cardItem fun--->",initialState.cartData.length )
  // if(initialState.cartData.length != 0 && initialState.cartData.length != 0) {
    switch (type) {
      case ActionType.ADD_TO_CART:
          return {
            ...state,
            cartData:[...state.cartData,payload]
          }
      case ActionType.REMOVE_SELECTED_PRODUCTED:
        return{
            cartData:[...state.cartData.filter(cartData=>cartData!==payload)],
        }
      default:
          return state;
  }
  // }
}


export const wishlistItems=(state=initialState,{type,payload})=>{
        switch(type){
          case ActionType.WISHLIST_PRODUCT:
            return{
              ...state,
              wishlistData:[...state.wishlistData,payload]
            }
            case ActionType.REMOVE_SELECTED_PRODUCTED:
             return{
              wishlistData:[...state.wishlistData.filter(wishlistData=>wishlistData!==payload)],
        }
            default:
              return state;
    
        }
}

export const procatFilter=(state=initialState,{type,payload})=>{
  // console.log("kya chr be tu nai dekhto mne------------>",type)
  switch(type){
    case ActionType.PRODUCT_CATEGORIES_FILTER:
      return{
        ...state,
        procatfilter:payload
      }
      default:
        return state;
  }

}
export const sellerpayFilter=(state=initialState,{type,payload})=>{
  // console.log("kya chr be tu nai dekhto mne------------>",type)
  switch(type){
    case ActionType.PRODUCT_CATEGORIES_FILTER:
      return{
        ...state,
        procatfilter:payload
      }
      default:
        return state;
  }

}

export const changeQuanumber=(state=initialState,{type})=>{

          switch(type){
            case ActionType.INCREMENT_NUMBER:
                return state + 1;
            case ActionType.DECREMENT_NUMBER:
                return {...state-1};
              
              default:
                return state;
          }
}

export const paymentCustomer=(state=initialState,{type,payload})=>{
  switch(type){

      case ActionType.CUSTOMER_PAYMENT_DATA:
          return {...state,cuspayment:payload};
      
      default:
          return state; 

  }
}







export const sellAddProduct=(state = initialState, {type,payload}) =>{
  // console.warn("I am in sell data--->",initialState.cartData.length )
  // if(initialState.cartData.length != 0 && initialState.cartData.length != 0) {
    switch (type) {
      case ActionType.SELLER_ADD_PRODUCT:
          return {
            ...state,
            products:[...state.products,payload]
          }
     
      default:
          return state;

  }
  // }
}

export const sellerProductReducer=(state=initialState,{type,payload})=>{
  switch(type){

      case ActionType.SELLER_SET_PRODUCT:
          return {...state,products:payload};
      
      default:
          return state; 

  }
}


export const sellerSelectedProducts= (state = {}, { type, payload }) => {
  console.log("Hello Seller selected product",type);

  switch (type) {
    case ActionType.SELLR_SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
}
