import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const options = {
    name: 'loadedInvoice', 
    initialState: {
        vendor: '',
        invoice: []
    },


    reducers: {
        loadInvoice: (state, action) => {
            const invoice = action.payload
            return {invoice}
        },
        updateSquareStatus: (state, action) => {
            console.log(action.itemID)
            console.log(action.payload.itemID)
            const updatedItem = {...state.invoice[action.payload.itemID], inSquare: action.payload.inSquare}
            return {...state, invoice: {
                    ...state.invoice, [action.payload.itemID]: updatedItem}}
        }

    }
}


export const loadedInvoiceSlice = createSlice(options)


export const {loadInvoice, updateSquareStatus} = loadedInvoiceSlice.actions

export default loadedInvoiceSlice.reducer


/////Selectors
export const getLoadedInvoice = (state) => {
    return state.loadedInvoice
}

/////Thunks
/////design backend path such that /Vendor/loadInvoice and pass parameter as number
export const loadInvoiceFromVendor = createAsyncThunk('/loadInvoiceFromVendor', async (invoiceRequest) => {
    console.log(invoiceNumber)
    const {vendor, invoiceNumber} = invoiceRequest
    const response = await getInvoiceFromVendor(vendor, invoiceNumber)
    return response
    ////Will need to standardize response   
})