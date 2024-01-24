export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const ADD_JOBS = 'ADD_JOBS'


export const addFavourite = (company) => {
        return {
        type: ADD_FAVOURITE,
        payload: company
        }
}


export const removeFavourite = (company) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: company
    }
}

export const addJobsList = (companies) => {
    return {
    type: ADD_JOBS,
    payload: companies
    }
}