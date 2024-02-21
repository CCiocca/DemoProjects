import { createSlice } from "@reduxjs/toolkit";

//this is the slice that manages the actions and the reducer about forecast data
//the initial state is set with the structure of the object that comes from the API, emptied from data

export const queryLatLonSlice = createSlice({
    name: 'queryLatLon',
    initialState : [
        {
            name: "",
            local_names: {},
            lat: 0,
            lon: 0,
            country: "",
            state: ""
        },
    ]
    ,
    reducers: {
        setResultsQueryLatLon: (_, action) =>{   //underscore to actively ignore the state which will not be used in the return
            return action.payload;        
        },
    },
})

export const {setResultsQueryLatLon} = queryLatLonSlice.actions; //this is the action that we will recall in the components to get/set the current state

export const queryLatLonReducer = queryLatLonSlice.reducer //this is the reducer that will receive the action and will set the new state accordingly