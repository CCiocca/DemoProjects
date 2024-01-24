import { configureStore } from "@reduxjs/toolkit";
import { forecastReducer } from "./forecastSlice";
import { weatherReducer } from "./weatherSlice";

//this configures the store through the use of redux toolkit, which allows to organize the different parts of the progect in the same file "slice" (see)
const store =  configureStore ({
    reducer:{
        weather: weatherReducer, 
        forecast: forecastReducer,
    }
});

export default store
