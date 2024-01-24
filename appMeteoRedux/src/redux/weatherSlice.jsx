import { createSlice } from "@reduxjs/toolkit";

//this is the slice that manages the actions and the reducer about forecast data
//the initial state is set with the structure of the object that comes from the API, emptied from data

export const weatherSlice = createSlice({
    name: 'weather',
    initialState : {
        coord: {},
        weather:[],
        base: "",
        main: {},
        visibility: 0,
        wind:{},
        clouds: {},
        dt: 0,
        sys: {},
        timezone: 0,
        id: 0,
        name: "",
        cod: 0
    
    },
    reducers: {
        setResultsWeather: (state, action) =>{
            return { ...state, ...action.payload };        
        },
    },
})

export const {setResultsWeather} = weatherSlice.actions; //this is the action that we will recall in the components to get/set the current state

export const weatherReducer = weatherSlice.reducer //this is the reducer that will receive the action and will set the new state accordingly