import { ActionType } from "../contants/ActionType";


// For product show in our store
export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCT,
        payload: products,
    };
};

// For single product show in click page
export const selectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}

// for delete old datas
export const removeSelectedProduct = () => {
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCTED,
    }
}




// For product add in add to cart
export const addTocart = (data) => {
    console.warn("in action", data);
    return {
        type: ActionType.ADD_TO_CART,
        payload: data,
    }
}


// For product delete in add to cart
export const removeCartProduct = (data) => {
    console.log("remover item form add to cart page");
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCTED,
        payload: data
    }
}


export const removeWishlistProduct = (data) => {
    console.log("remover item form wishlist to cart page");
    return {
        type: ActionType.REMOVE_SELECTED_PRODUCTED,
        payload: data
    }
}
// For wishlist product'
export const wishlistProduct = (data) => {
    console.log("Wishlist items");
    return {
        type: ActionType.WISHLIST_PRODUCT,
        payload: data
    }

}

export const productCateFilter = (data) => {
    console.log("I am in categories filter");
    return {
        type: ActionType.PRODUCT_CATEGORIES_FILTER,
        payload: data
    }
}

export const sellerpaymentFilter = (data) => {
    console.log("I am in payment filter");
    return {
        type: ActionType.PAYMENT_SELLER_FILTER,
        payload: data
    }
}


// For increment quantity

export const incQuaNumber = () => {
    return {
        type: ActionType.INCREMENT_NUMBER
    }
}


export const decQuaNumber = () => {
    return {
        type: ActionType.DECREMENT_NUMBER
    }
}

// payment data
export const customertPayment = (data) => {
    return {
        type: ActionType.CUSTOMER_PAYMENT_DATA,
        payload: data,
    };
};

// Seller 

export const sellerAddProducts = (products) => {
    return {
        type: ActionType.SELLER_ADD_PRODUCT,
        payload: products,
    }
}

export const sellerSelectedProduct = (product) => {
    return {
        type: ActionType.SELLR_SELECTED_PRODUCT,
        payload: product,
    }
}

export const sellersetProducts = (products) => {
    return {
        type: ActionType.SELLER_SET_PRODUCT,
        payload: products,
    };
};
