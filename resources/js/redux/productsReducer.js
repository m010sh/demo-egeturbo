import { GET_PRODUCTS } from "./types";

const initialState = {
    products: [],
    allowedPlatforms: [],
    allowedTypes: [],
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            const {products, allowedPlatforms, allowedTypes} = action.payload;
            return {
                products,
                allowedPlatforms,
                allowedTypes
            }
        default:
            return state;
    }
}
