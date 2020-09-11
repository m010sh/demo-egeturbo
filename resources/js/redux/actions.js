import {CHANGE_FILTER, GET_PRODUCTS} from "./types";

export const getProducts = () => {
    return (dispatch, getState) => {
        const { manufacturers, platforms, types } = getState().filter;
        axios.get('/api/products', {
            params: {
                manufacturers,
                platforms,
                types,
            },
        }).then(response => {
            dispatch({type: GET_PRODUCTS, payload: response.data})
        })
    }
}

export const changeFilter = (payload) => {
    return (dispatch) => {
        dispatch({type: CHANGE_FILTER, payload: payload})
    }
}
