import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { getInvoiceFromVendor } from '../../utils/apiCalls'
import { qbpInvoiceXMLtoJSON } from '../../utils/qbpInvoiceHelpers'

const options = {
    name: 'loadedInvoice', 
    initialState: {
        status: 'idle',
        squareMatch: 'awaiting',
        vendor: '',
        invoice: []
    },


    reducers: {
        loadInvoice: (state, action) => {
            const invoice = action.payload
            return {invoice}
        },
        updateSquareMatch: (state, action) => {
            const squareMatch = action.payload
            return {...state, squareMatch:squareMatch}
        },
        updateSquareStatus: (state, action) => {
            console.log(action.itemID)
            console.log(action.payload.itemID)
            // const updatedItem = {...state.invoice[action.payload.itemID], inSquare: action.payload.inSquare}
            // return {...state, invoice: {
            //         ...state.invoice, [action.payload.itemID]: updatedItem}}
        }

    },
    extraReducers(builder) {
        builder
          .addCase(loadInvoiceFromVendor.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(loadInvoiceFromVendor.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const {vendor, invoice} = action.payload
            console.log(action.payload)
        
            state.vendor = vendor
            state.invoice = invoice
          })
          .addCase(loadInvoiceFromVendor.rejected, (state, action) => {
            state.qbp.status = 'failed'
            state.qbp.error = action.error.message
          })
    }
}


export const loadedInvoiceSlice = createSlice(options)


export const {loadInvoice, updateSquareStatus} = loadedInvoiceSlice.actions

export default loadedInvoiceSlice.reducer


/////Selectors
export const getLoadedInvoice = (state) => {
    return state.loadedInvoice.invoice
}

export const getLoadedInvoiceStatus = (state) => {
    return state.loadedInvoice.status
} 

export const getSquareMatchStatus = (state) => {
    return state.loadedInvoice.squareMatch
}

/////Thunks
/////design backend path such that /Vendor/loadInvoice and pass parameter as number
export const loadInvoiceFromVendor = createAsyncThunk('/loadInvoiceFromVendor', async (invoiceRequest) => {
    const {vendor, invoiceNumber} = invoiceRequest
    console.log(vendor)
    const response = await getInvoiceFromVendor(vendor, invoiceNumber)
    switch (vendor) {
        case 'QBP':
            const invoice = qbpInvoiceXMLtoJSON(response)
            const invoiceInfo = {vendor, invoice}
            // console.log(invoiceInfo)
            return invoiceInfo
            break;
    }
    ////Will need to standardize response   
})