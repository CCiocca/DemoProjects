import { createSlice } from "@reduxjs/toolkit";

//this is the slice that manages the actions and the reducer about forecast data
//the initial state is set with the structure of the object that comes from the API, emptied from data

export const forecastSlice = createSlice({
    name: 'forecast',
    initialState: {
        cod: "",
        message: 0,
        cnt: 0,
        list: [],
        city:{}
    },
    reducers: {
        setResultsForecast: (state, action) =>{
            return { ...state, ...action.payload }
        },
    },
})

export const { setResultsForecast } = forecastSlice.actions; //this is the action that we will recall in the components to get/set the current state

export const forecastReducer = forecastSlice.reducer //this is the reducer that will receive the action and will set the new state accordingly