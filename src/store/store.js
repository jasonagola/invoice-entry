import { configureStore } from "@reduxjs/toolkit";

import searchResultsReducer from "./searchResults/searchResultSlice";
import loadedInvoiceReducer from './loadedInvoice/loadedInvoiceSlice'
import databaseInvoicesReducer from "./databaseInvoices/databaseInvoicesSlice";
import foundInvoicesReducer from "./foundInvoices/foundInvoicesSlice";

const store = configureStore({
    reducer: {
        searchResults: searchResultsReducer,
        loadedInvoice: loadedInvoiceReducer,
        databaseInvoices: databaseInvoicesReducer,
        foundInvoices: foundInvoicesReducer
    }
})

export default store