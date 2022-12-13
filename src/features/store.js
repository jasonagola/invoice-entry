import { configureStore } from "@reduxjs/toolkit";

import searchResultsReducer from "./searchResults/searchResultSlice";

const store = configureStore({
    reducer: {
        searchResults: searchResultsReducer
    }
})

export default store