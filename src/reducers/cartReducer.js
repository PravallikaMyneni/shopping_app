import { FaPray } from "react-icons/fa";

const initialState = {
    products: [],
    productIds: [],
    isError: false,
};
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CARTITEMS": {
            return {
                ...state,
                products: action.payload
            };
        }
        case "ADD_TO_CART": {
            var itemToAdd = Object.assign({}, action.payload);
            if (state.productIds.indexOf(itemToAdd.id) < 0) {
                itemToAdd["isAdded"] = true;
                itemToAdd["quantity"] = 1;
                itemToAdd["totalPrice"] = itemToAdd.price;
                return {
                    ...state,
                    products: [...state.products, itemToAdd],
                    productIds: [...state.productIds, itemToAdd.id]
                };
            } else {
                return {
                    ...state,
                    isError: true
                };
            }
        }
        case "REMOVE_FROM_CART": {
            var currProduct = Object.assign({}, action.payload);
            var cartProducts = [...state.products];
            var updatedProductList = cartProducts.filter(function(rec){
                if(rec.id !== currProduct.id)
                  return rec;
            });
            var cartProdId = [...state.productIds];
            var ind = cartProdId.indexOf(currProduct.id);
            cartProdId.splice(ind,1);
            return{
                ...state,
                products: updatedProductList,
                productIds: cartProdId
            }

        }
        case "CART_ERROR": {
            return {
                ...state,
                isError: true
            };
        }
        case "INCREASE_QUANTITY": {
            var currProduct = Object.assign({}, action.payload);
            if (state.productIds.indexOf(currProduct.id) >= 0) {
                return {
                    ...state,
                    products: state.products.map(function(rec){
                        if(rec.id === currProduct.id){
                            rec.quantity = rec.quantity + 1;
                            rec.totalPrice = rec.quantity * rec.price;   
                        }
                        return rec;
                    })
                };
            } else {
                return {
                    ...state,
                    isError: true
                };
            }

        }
        case "DECREASE_QUANTITY": {
            var currProduct = Object.assign({}, action.payload);
            if (state.productIds.indexOf(currProduct.id) >= 0) {
                return {
                    ...state,
                    products: state.products.map(function(rec){
                        if(rec.id === currProduct.id){
                            rec.quantity = ( rec.quantity >1 ) ? rec.quantity - 1 : 1;
                            rec.totalPrice = rec.quantity * rec.price;
                        }
                        return rec;
                    })
                };
            } else {
                return {
                    ...state,
                    isError: true
                };
            }
        }
        default:
            return state;
    }
}

export default cartReducer;