import {createSlice} from '@reduxjs/toolkit'

const options = {
    name: 'loadedInvoice', 
    initialState: {

    },


    reducers: {
        loadInvoice: (state, action) => {
            const invoice = action.payload
            return {invoice}
        },
        updateSquareStatus: (state, action) => {
            const {itemID, inSquare} = action.payload
            return {...state, itemID: {...state.loadedInvoice.invoice.itemID, inSquare: inSquare}}
        }

    }
}

export const getLoadedInvoice = (state) => {
    return state.loadedInvoice
}


export const loadedInvoiceSlice = createSlice(options)
export const {loadInvoice} = loadedInvoiceSlice.actions

export default loadedInvoiceSlice.reducer