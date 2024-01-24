import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer"

const rootReducer = combineReducers({
    favouriteCompany : favouritesReducer,
})

export default rootReducer