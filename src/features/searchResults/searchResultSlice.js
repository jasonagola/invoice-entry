import {createSlice} from '@reduxjs/toolkit'

const options = {
    name: 'searchResults',
    initialState: {

    }, 
    reducers: {
        addItem: (state, action) => {
        ///OBject.value to break out values
        const item = action.payload
        console.log(item)
        return {...state, item: item}
        },
    }
}

export const getSearchedItems = (state) => {
    return state.searchResults
}

export const searchResultsSlice = createSlice(options)
export const {addItem} = searchResultsSlice.actions

export default searchResultsSlice.reducer