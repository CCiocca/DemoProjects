import { createStore } from "redux";
import favouritesReducer from "../reducers/favouritesReducer";



const store = createStore(favouritesReducer)

export default store