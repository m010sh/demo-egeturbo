import { CHANGE_FILTER } from "./types";

const initialState = {
    manufacturers: [],
    platforms: [],
    types: [],
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            const { filterName, id } = action.payload;
            const index = state[filterName].indexOf(id);
            let newArray = [...state[filterName]];
            if (index !== -1) {
                newArray.splice(index, 1)
            } else {
                newArray.push(id)
            }
            return {...state, [filterName]: newArray}
        }
    }
    return state;
}
