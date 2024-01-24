
import { ADD_FAVOURITE } from "../actions/favouritesAction"
import { REMOVE_FAVOURITE } from "../actions/favouritesAction"
import { ADD_JOBS } from "../actions/favouritesAction"

const initialState = {
    favourites: [],
    jobsList: [],
}

const favouritesReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE : 
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case REMOVE_FAVOURITE :
            return {
                ...state,
                favourites: state.favourites.filter(
                    (company) => company._id !== action.payload._id
                )
            }

        case ADD_JOBS: 
            return {
                ...state,
                jobsList: action.payload
            }

        default : 
            return state;

}}

export default favouritesReducer