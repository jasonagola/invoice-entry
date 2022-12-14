import { configureStore } from "@reduxjs/toolkit";

import searchResultsReducer from "./searchResults/searchResultSlice";
import loadedInvoiceReducer from './loadedInvoice/loadedInvoiceSlice'

const store = configureStore({
    reducer: {
        searchResults: searchResultsReducer,
        loadedInvoice: loadedInvoiceReducer
    }
})

export default store